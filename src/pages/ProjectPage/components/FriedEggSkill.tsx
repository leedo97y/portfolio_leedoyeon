import React from "react";
import { WholeBtn, Button } from "./SkillButtonStyle";
import HtmlLogo from "../../../assets/images/htmllogo.png";
import CssLogo from "../../../assets/images/csslogo.png";
import JsLogo from "../../../assets/images/jslogo.png";
import EjsLogo from "../../../assets/images/ejslogo.png";
import BulmaLogo from "../../../assets/images/bulmalogo.png";

import NodeLogo from "../../../assets/images/nodejslogo.png";
import MongodbLogo from "../../../assets/images/mongodblogo.png";
import ExpressLogo from "../../../assets/images/expresslogo.png";
import MongooseLogo from "../../../assets/images/mongooselogo.png";

import NginxLogo from "../../../assets/images/nginxlogo.png";
import Pm2Logo from "../../../assets/images/pm2logo.jpeg";

import GitLogo from "../../../assets/images/gitlogo.png";
import GitlabLogo from "../../../assets/images/gitlablogo.png";
import FigmaLogo from "../../../assets/images/figmalogo.png";
import TrelloLogo from "../../../assets/images/trellologo.jpeg";

const FriedEggFrontSkill: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={HtmlLogo} alt="HTML" />
      </Button>
      <Button>
        <img src={CssLogo} alt="CSS" />
      </Button>
      <Button>
        <img src={JsLogo} alt="JavaScript" />
      </Button>
      <Button>
        <img src={EjsLogo} alt="ejs" />
      </Button>
      <Button>
        <img src={BulmaLogo} alt="bulma css" />
      </Button>
    </WholeBtn>
  );
};

const FriedEggBackSkill: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={JsLogo} alt="JavaScript" />
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
    </WholeBtn>
  );
};

const FriedEggDeploy: React.FC = () => {
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

const FriedEggTool: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={GitLogo} alt="git" />
      </Button>
      <Button>
        <img src={GitlabLogo} alt="gitlab" />
      </Button>
      <Button>
        <img src={TrelloLogo} alt="Trello" />
      </Button>
      <Button>
        <img src={FigmaLogo} alt="figma" />
      </Button>
    </WholeBtn>
  );
};

export { FriedEggFrontSkill, FriedEggBackSkill, FriedEggDeploy, FriedEggTool };
