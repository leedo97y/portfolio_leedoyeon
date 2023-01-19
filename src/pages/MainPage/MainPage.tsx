import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, MainDiv, Blue } from "./MainPageStyle";

const MainPage: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <MainDiv>
        <p>소통이 잘 되며,</p>
        <p>알게 된 다양한 기술, 트렌드들을 동료와 나누며</p>
        <p>좋은 개발 문화를 만들고 싶은 웹 개발자 이도연 입니다.</p>
      </MainDiv>
    </Container>
  );
};

export default MainPage;
