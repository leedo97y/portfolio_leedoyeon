import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container } from "../MainPage/MainPageStyle";
import { AboutDiv } from "./AboutPageStyle";

const AboutPage = () => {
  return (
    <Container>
      <SideBar />
      <AboutDiv>about page</AboutDiv>
    </Container>
  );
};

export default AboutPage;
