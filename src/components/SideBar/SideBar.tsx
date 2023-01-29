import React from "react";
import { SideBarDiv, ProfileSpace, Info } from "./SideBarStyle";
import MenuComponent from "../Menu/Menu";
import GithubLogo from "../../assets/images/githublogo.svg";
import VelogLogo from "../../assets/images/veloglogo.svg";
import GmailLogo from "../../assets/images/gmail.svg";

const SideBar: React.FC = () => {
  return (
    <SideBarDiv>
      <ProfileSpace>
        <h1>doyeonlee</h1>
        <span>frontend developer</span>
        <Info>
          <a href="https://github.com/leedo97y">
            <img src={GithubLogo} alt="github" />
          </a>
          <a href="mailto:dlehdus1433@gmail.com">
            <img src={GmailLogo} alt="gmail" />
          </a>
          <a href="https://velog.io/@dlehdus97">
            <img src={VelogLogo} alt="velog" />
          </a>
        </Info>
      </ProfileSpace>
      <MenuComponent />
    </SideBarDiv>
  );
};

export default SideBar;
