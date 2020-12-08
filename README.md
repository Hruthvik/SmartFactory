# 👉 IoT 기술을 활용한 스마트 팩토리 플랫폼 👈

---



## 1️⃣ 개발 배경

- ### 국내 중·소기업의 경우 스마트 팩토리 설비를 위한 전문 인력 부족 및 유지·보수 비용 부담으로 인해 스마트 팩토리 시스템을 구축하기 어려운 상황이며, 정부 지원을 통해 구축되 고 있으나 한정된 예산으로 인해 보급률이 높지 않음

- ### 본 프로젝트에서는 보급률을 높이기 위해 뛰어난 성능 보다 중·소기업이 쉽게 스마트 팩토리 솔루션을 적용시킬 수 있는 플랫폼 개발을 목표로 함

---



## 2️⃣ 개발 목표

- ### 사물인터넷 기반 스마트 팩토리 핵심기술 연구 및 중·소기업에 손쉽게 스마트 팩토리 기술을보급할 수 있도록 도와주는 자율형 스마트 팩토리 플랫폼을 개발하고자 함

- ### 본 프로젝트에서는 3개의 소프트웨어 모듈 개발을 수행하고, 개발된 모듈을 기반으로 4개의 엔티티구현 및 자율형 스마트 팩토리 시스템 설비를 최종 목표로 함

- ### 추가적으로 완성된 플랫폼을 도커 컨테이너로 배포함으로써 중·소기업에서의 사용성을 좀 더 용이하게 구현하고자 함

---



## 3️⃣ 개발 내용



###     📍 시스템 구조도

![image](https://user-images.githubusercontent.com/57346455/101447970-97704a00-3969-11eb-9f44-32aa9ff23827.png)



###     📍 공정라인 세부 구조

![image](https://user-images.githubusercontent.com/57346455/101448229-05b50c80-396a-11eb-8d5c-e7903ed08a40.png)



---



## 4️⃣ 개발 결과



###     📍 시스템 실행

- ##### graphQL Server : gqlServer 디렉토리 접근 후 "npm run start" 명령 실행

- ##### login Server : loginServer 디렉토리 접근 후 "npm run start" 명령 실행

- ##### Client(React) : React 웹페이지 실행 시 Client 디렉토리 접근 후 "npm run start" 명령 실행



###     📍 실행 화면

![image](https://user-images.githubusercontent.com/57346455/101448670-c89d4a00-396a-11eb-89b2-a703abe3d93e.png)

- ##### 팩토리 센서 총괄 모니터링 화면 - 모든 공정라인들의 센서들을 모아서 한눈에 확인해 볼 수 있음



![image](https://user-images.githubusercontent.com/57346455/101448747-f1bdda80-396a-11eb-83f9-cf5a1be6f044.png)

- ##### 공정라인별 센서 모니터링 화면 - 각 공정라인별로 등록된 센서들의 모니터링을 효과적으로 가능케 함



![image](https://user-images.githubusercontent.com/57346455/101448899-2c277780-396b-11eb-8368-803befa58446.png)

- ##### 센서 등록 화면 - 새롭게 모니터링 하고 싶은 센서는 설치 후 등록화면에서 등록 승인 버튼을 거친 후 모니터링 가능



![image](https://user-images.githubusercontent.com/57346455/101449045-73156d00-396b-11eb-9fce-6691ccc8b628.png)

- ##### 센서 설정 화면 - 각 센서들의 측정 범위를 설정하여 예외 상황을 효과적으로 모니터링 가능하도록 설정하는 화면

---



## 5️⃣ 기대효과

- #### 사용자 친화적인 스마트 팩토리 인터페이스 모듈을 구현하여 직원들이 사용함에있어 진입장벽을 낮출 수 있도록 함.

- #### 사물인터넷 기반 스마트 팩토리 솔루션을 통해 제조 설비간의 유연성을 확보할 수있음

- #### 본 연구에서 개발한 자율형 IoT 기반 스마트 팩토리 플랫폼을 통해 중·소기업이 쉽게 스마트 팩토리 기술을 적용할 수 있을 것이라 기대함

