import React from "react";
import { SideBarDiv, ProfileSpace } from "./SideBarStyle";
import Menu from "../Menu/Menu";

const SideBar: React.FC = () => {
  return (
    <SideBarDiv>
      <ProfileSpace>
        <h1>doyeonlee</h1>
        <span>frontend developer</span>
      </ProfileSpace>
      <Menu />
    </SideBarDiv>
  );
};

export default SideBar;
