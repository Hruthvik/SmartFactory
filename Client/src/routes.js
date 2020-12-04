import Dashboard from "views/Dashboard.js";
import Registration from "views/Registration.js";
import Setting from "views/Setting.js";
// import ProcessLine1 from "line1/Lineboard1.js";
// import ProcessLine2 from "line2/Lineboard2.js";
// import ProcessLine3 from "line3/Lineboard3.js";
import Registerform from "views/Registerform.js";

var routes = [
  {
    path: "/dashboard",
    name: "DashBoard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/Processline1",
  //   name: "Processline1",
  //   icon: "tim-icons icon-align-center",
  //   component: ProcessLine1,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Processline2",
  //   name: "Processline2",
  //   icon: "tim-icons icon-align-center",
  //   component: ProcessLine2,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Processline3",
  //   name: "Processline3",
  //   icon: "tim-icons icon-align-center",
  //   component: ProcessLine3,
  //   layout: "/admin"
  // },
  {
    path: "/Registration",
    name: "Registration",
    icon: "tim-icons icon-atom",
    component: Registration,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "tim-icons icon-pin",
    component: Setting,
    layout: "/admin"
  },
  {
    path: "/registerform",
    name: "RegisterForm",
    icon: "tim-icons icon-single-02",
    component: Registerform,
    layout: "/admin"
  }
];
export default routes;