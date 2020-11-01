import React from "react";
import { Line } from "react-chartjs-2";
import graphql2chartjs from "graphql2chartjs";
import { Subscription, Query } from "react-apollo";
import gql from "graphql-tag";


class PreChart extends React.Component {
  constructor(props) {
    super(props);
    this.querystr = gql`query {
      items {
        label: id
        data: weight
      }
    }`
    this.subscribestr = `
    subscription {
      newItem{
        label: id
        data: weight
      }
    }
  `;
  }

  // Chart component
  render() {
    return (
      <Subscription subscription={gql`${this.subscribestr}`}>
        {({ data, loading }) => {
          if (loading) return null;
          const newdata = data;

          return <Query query={gql`${this.querystr}`}>
            {({ data, loading }) => {
              if (loading) return null;

              data.items.push(newdata.newItem);
              if(data.items.length >20) data.items.shift();

              // create graphql2chartjs instance
              let g2c = new graphql2chartjs(data, () => {
                return {
                  chartType: 'line',
                  pointBackgroundColor: 'yellow',
                  borderColor: 'yellow',
                  borderWidth: 1
                };
              });

              // render chart with g2c data :)
              return (
                <Line data={g2c.data}/>
              );
            }}
          </Query>
        }}
      </Subscription>
    );
  };
}

export default PreChart;