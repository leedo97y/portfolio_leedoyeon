import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, MainDiv, Blue } from "./MainPageStyle";

const MainPage = () => {
  return (
    <Container>
      <SideBar />
      <MainDiv>
        알게 된 다양한 기술, 트렌드들을 동료와 나누며
        <br />
        좋은 개발 문화를 만들고 싶은 신입
        <Blue> 프론트엔드 개발자</Blue> 이도연 입니다.
      </MainDiv>
    </Container>
  );
};

export default MainPage;
