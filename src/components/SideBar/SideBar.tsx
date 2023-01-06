import React from "react";
// import { Link } from "react-router-dom";
import { SideBarDiv, ProfileSpace, Menu, NavbarLink } from "./SideBarStyle";

const SideBar = () => {
  return (
    <SideBarDiv>
      <ProfileSpace>
        <h1>doyeonlee</h1>
        <span>frontend developer</span>
      </ProfileSpace>
      <Menu>
        <NavbarLink to="/">
          <span>main</span>
        </NavbarLink>
        <NavbarLink to="/about">
          <span>about me</span>
        </NavbarLink>
        <NavbarLink to="#">
          <span>tech skills</span>
        </NavbarLink>
        <NavbarLink to="#">
          <span>project</span>
        </NavbarLink>
      </Menu>
    </SideBarDiv>
  );
};

export default SideBar;
