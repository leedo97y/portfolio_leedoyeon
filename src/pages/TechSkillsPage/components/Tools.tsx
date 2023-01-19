import React from "react";
import { Content, ToolDiv } from "./SkillsStyles";
import GitLogo from "../../../assets/images/gitlogo.png";
import GithubLogo from "../../../assets/images/githublogo.png";
import FigmaLogo from "../../../assets/images/figmalogo.png";
import TrelloLogo from "../../../assets/images/trellologo.jpeg";
import PostmanLogo from "../../../assets/images/postmanlogo.png";

const Tools: React.FC = () => {
  return (
    <ToolDiv>
      <Content>
        <img src={GitLogo} />
      </Content>
      <Content>
        <img src={GithubLogo} />
      </Content>
      <Content>
        <img src={TrelloLogo} />
      </Content>
      <Content>
        <img src={PostmanLogo} />
      </Content>
      <Content>
        <img src={FigmaLogo} />
      </Content>
    </ToolDiv>
  );
};

export default Tools;
