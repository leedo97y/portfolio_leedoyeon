import React from "react";
import { Content, ToolDiv } from "./SkillsStyles";
import GitLogo from "../../../assets/images/gitlogo.png";
import GithubLogo from "../../../assets/images/githublogo.png";
import FigmaLogo from "../../../assets/images/figmalogo.png";
import TrelloLogo from "../../../assets/images/trellologo.jpeg";
import PostmanLogo from "../../../assets/images/postmanlogo.png";
import SwaggerLogo from "../../../assets/images/swaggerlogo.png";
import GitlabLogo from "../../../assets/images/gitlablogo.png";
import JiraLogo from "../../../assets/images/jiralogo.jpeg";
import VsCodeLogo from "../../../assets/images/vscodelogo.jpeg";
import SlackLogo from "../../../assets/images/slacklogo.png";

const Tools: React.FC = () => {
  return (
    <ToolDiv>
      <Content>
        <img src={VsCodeLogo} />
      </Content>
      <Content>
        <img src={FigmaLogo} />
      </Content>
      <Content>
        <img src={GitLogo} />
      </Content>
      <Content>
        <img src={GitlabLogo} />
      </Content>
      <Content>
        <img src={GithubLogo} />
      </Content>
      <Content>
        <img src={TrelloLogo} />
      </Content>
      <Content>
        <img src={JiraLogo} />
      </Content>
      <Content>
        <img src={SlackLogo} />
      </Content>
      <Content>
        <img src={PostmanLogo} />
      </Content>
      <Content>
        <img src={SwaggerLogo} />
      </Content>
    </ToolDiv>
  );
};

export default Tools;
