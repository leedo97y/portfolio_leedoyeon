import React from "react";
import { WholeBtn, Button } from "./SkillButtonStyle";
import ReactLogo from "../../../assets/images/reactlogo.png";
import TypeScriptLogo from "../../../assets/images/typescriptlogo.png";
import SassLogo from "../../../assets/images/sasslogo.png";
import StyledLogo from "../../../assets/images/styledlogo.png";
import ReduxLogo from "../../../assets/images/reduxlogo.png";

import NodeLogo from "../../../assets/images/nodejslogo.png";
import MongodbLogo from "../../../assets/images/mongodblogo.png";
import ExpressLogo from "../../../assets/images/expresslogo.png";
import MongooseLogo from "../../../assets/images/mongooselogo.png";
import RedisLogo from "../../../assets/images/redislogo.png";

import NginxLogo from "../../../assets/images/nginxlogo.png";
import Pm2Logo from "../../../assets/images/pm2logo.jpeg";

import GitLogo from "../../../assets/images/gitlogo.png";
import GitlabLogo from "../../../assets/images/gitlablogo.png";
import FigmaLogo from "../../../assets/images/figmalogo.png";

const TripMatchFrontSkill = () => {
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
      <Button>
        <img src={ReduxLogo} alt="redux-toolkit" />
      </Button>
    </WholeBtn>
  );
};

const TripMatchBackSkill = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={TypeScriptLogo} alt="typescript" />
      </Button>
      <Button>
        <img src={NodeLogo} alt="node js" />
      </Button>
      <Button>
        <img src={MongodbLogo} alt="mongoDB" />
      </Button>
      <Button>
        <img src={ExpressLogo} alt="express js" />
      </Button>
      <Button>
        <img src={MongooseLogo} alt="mongoose" />
      </Button>
      <Button>
        <img src={RedisLogo} alt="redis" />
      </Button>
    </WholeBtn>
  );
};

const TripMatchTool: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={GitLogo} alt="git" />
      </Button>
      <Button>
        <img src={GitlabLogo} alt="gitlab" />
      </Button>
      <Button>
        <img src={FigmaLogo} alt="figma" />
      </Button>
    </WholeBtn>
  );
};

const TripMatchDeploy: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={NginxLogo} alt="NginX" />
      </Button>
      <Button>
        <img src={Pm2Logo} alt="PM2" />
      </Button>
    </WholeBtn>
  );
};

export {
  TripMatchFrontSkill,
  TripMatchBackSkill,
  TripMatchDeploy,
  TripMatchTool,
};
