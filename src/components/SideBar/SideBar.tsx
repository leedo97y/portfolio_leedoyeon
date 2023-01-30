import React from "react";
import { SideBarDiv, ProfileSpace } from "./SideBarStyle";
import MenuComponent from "../Menu/Menu";
import Footer from "../Footer/Footer";

const SideBar: React.FC = () => {
  return (
    <SideBarDiv>
      <ProfileSpace>
        <h1>doyeonlee</h1>
        <span>frontend developer</span>
      </ProfileSpace>
      <MenuComponent />
      <Footer />
    </SideBarDiv>
  );
};

export default SideBar;
