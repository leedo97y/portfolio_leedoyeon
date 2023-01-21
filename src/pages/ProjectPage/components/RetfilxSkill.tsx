import React from "react";
import { WholeBtn, Button } from "./SkillButtonStyle";
import ReactLogo from "../../../assets/images/reactlogo.png";
import EmotionLogo from "../../../assets/images/emotionlogo.png";
import StyledLogo from "../../../assets/images/styledlogo.png";

import GitLogo from "../../../assets/images/gitlogo.png";
import GithubLogo from "../../../assets/images/githublogo.png";
import FigmaLogo from "../../../assets/images/figmalogo.png";
import JiraLogo from "../../../assets/images/jiralogo.jpeg";

const RetfilxSkill: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={ReactLogo} alt="React" />
      </Button>
      <Button>
        <img src={StyledLogo} alt="styled component" />
      </Button>
      <Button>
        <img src={EmotionLogo} alt="emotion styled component" />
      </Button>
    </WholeBtn>
  );
};

const RetfilxTool: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={GitLogo} alt="git" />
      </Button>
      <Button>
        <img src={GithubLogo} alt="github" />
      </Button>
      <Button>
        <img src={FigmaLogo} alt="figma" />
      </Button>
      <Button>
        <img src={JiraLogo} alt="jira" />
      </Button>
    </WholeBtn>
  );
};

export { RetfilxSkill, RetfilxTool };
