import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, TechDiv } from "../TechSkillsPage/TechPageStyle";
import Languages from "./components/Languages";
import Tools from "./components/Tools";

const TechPage: React.FC = () => {
  return (
    <div>
      <Container>
        <SideBar />
        <TechDiv>
          <h1>tech skills</h1>
          <span>여태까지 공부해본, 써본 기술</span>
          <h3 id="lang">languages</h3>
          <Languages />
          <h3>tools</h3>
          <Tools />
        </TechDiv>
      </Container>
    </div>
  );
};

export default TechPage;
