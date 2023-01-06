import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Container, MainDiv } from "./MainPageStyle";

const MainPage = () => {
  return (
    <Container>
      <SideBar />
      <MainDiv>main page</MainDiv>
    </Container>
  );
};

export default MainPage;
