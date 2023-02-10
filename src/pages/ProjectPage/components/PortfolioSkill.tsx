import React from "react";
import { WholeBtn, Button } from "./SkillButtonStyle";
import ReactLogo from "../../../assets/images/reactlogo.png";
import TypeScriptLogo from "../../../assets/images/typescriptlogo.png";
import SassLogo from "../../../assets/images/sasslogo.png";
import StyledLogo from "../../../assets/images/styledlogo.png";

import VercelLogo from "../../../assets/images/vercellogo.png";

import GitLogo from "../../../assets/images/gitlogo.png";
import GithubLogo from "../../../assets/images/githublogo.png";
import FigmaLogo from "../../../assets/images/figmalogo.png";

const PortfolioSkill: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={ReactLogo} alt="React" />
      </Button>
      <Button>
        <img src={TypeScriptLogo} alt="typescript" />
      </Button>
      <Button>
        <img src={StyledLogo} alt="styled component" />
      </Button>
      <Button>
        <img src={SassLogo} alt="Sass" />
      </Button>
    </WholeBtn>
  );
};

const PortfolioTool: React.FC = () => {
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
    </WholeBtn>
  );
};

const PortfolioDeploy: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={VercelLogo} alt="vercel" />
      </Button>
    </WholeBtn>
  );
};

export { PortfolioSkill, PortfolioTool, PortfolioDeploy };
