import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, AboutDiv } from "./AboutPageStyle";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <AboutDiv>
        <h1>about me</h1>
        <h3>name</h3>
        <span>이도연</span>
        <h3>short introduce</h3>
        <p>
          백엔드와 소통이 잘되는 프론트엔드 엔지니어를 희망합니다!
          <br />
          이를 위해 저는 두가지 목표가 있습니다.
          <br />
          UI / UX등 사용자의 사용성을 높일 수 있는 웹 페이지를 만드는 것이
          첫번째 목표이며, 나아가 사용자와의 원활한 소통을 할 수 있는 e-커머스
          웹 / 앱을 개발하는 것이 두번째 목표입니다.
          <br />
          저는 꾸준함의 힘을 믿습니다.
          <br />
          따라서 위의 두가지 목표를 이루기 위해 꾸준히 개발 동향을 찾아보고,
          알게 된 것들을 정리할 것 입니다.
          <br />
          또한 이렇게 알게 된 다양한 기술, 트렌드를 동료 개발자들과 나누며 좋은
          개발 문화를 만들겠습니다.
        </p>

        <h3>phone</h3>
        <span>010-3837-2351</span>
        <h3>email</h3>
        <span>dlehdus1433@gmail.com</span>
        <h3>address</h3>
        <span>서울시 노원구</span>
      </AboutDiv>
    </Container>
  );
};

export default AboutPage;
