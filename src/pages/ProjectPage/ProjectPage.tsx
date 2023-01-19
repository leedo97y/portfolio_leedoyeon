import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, ProjectDiv } from "../ProjectPage/ProjectPageStyle";

const ProjectPage = () => {
  return (
    <div>
      <Container>
        <SideBar />
        <ProjectDiv>HI</ProjectDiv>
      </Container>
    </div>
  );
};

export default ProjectPage;
