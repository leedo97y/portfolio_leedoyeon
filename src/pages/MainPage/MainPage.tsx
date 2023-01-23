import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, MainDiv, Bold, Blue } from "./MainPageStyle";

const MainPage: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <div id="layer">
        <MainDiv>
          <div>
            <p id="first">소통이 잘 되는 개발자,</p>
            <p id="second">알게 된 다양한 기술, 트렌드들을 동료와 나누며</p>
            <p id="third">
              좋은 개발 문화를 만들고 싶은{" "}
              <Blue>신입 웹 프론트엔드 개발자 </Blue>
              <Bold>이도연</Bold> 입니다.
            </p>
          </div>
        </MainDiv>
      </div>
    </Container>
  );
};

export default MainPage;
