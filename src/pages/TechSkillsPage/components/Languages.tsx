import React from "react";
import { Content, LanguageDiv } from "./SkillsStyles";
import JsLogo from "../../../assets/images/jslogo.png";
import HtmlLogo from "../../../assets/images/htmllogo.png";
import CssLogo from "../../../assets/images/csslogo.png";
import ReactLogo from "../../../assets/images/reactlogo.png";
import ReduxLogo from "../../../assets/images/reduxlogo.png";
import TypeScriptLogo from "../../../assets/images/typescriptlogo.png";
import EmotionLogo from "../../../assets/images/emotionlogo.png";
import StyledLogo from "../../../assets/images/styledlogo.png";
import BootLogo from "../../../assets/images/bootstraplogo.png";
import SassLogo from "../../../assets/images/sasslogo.png";
import NodeLogo from "../../../assets/images/nodejslogo.png";
import MongodbLogo from "../../../assets/images/mongodblogo.png";
import ExpressLogo from "../../../assets/images/expresslogo.png";
import PythonLogo from "../../../assets/images/pythonlogo.png";

const Languages: React.FC = () => {
  return (
    <LanguageDiv>
      <Content>
        <img src={HtmlLogo} id="html" />
      </Content>
      <Content>
        <img src={CssLogo} id="css" />
      </Content>
      <Content>
        <img src={JsLogo} />
      </Content>
      <Content>
        <img src={ReactLogo} id="react" />
      </Content>
      <Content>
        <img src={ReduxLogo} />
      </Content>
      <Content>
        <img src={TypeScriptLogo} />
      </Content>
      <Content>
        <img src={BootLogo} id="boot" />
      </Content>
      <Content>
        <img src={SassLogo} />
      </Content>
      <Content>
        <img src={StyledLogo} />
      </Content>
      <Content>
        <img src={EmotionLogo} />
      </Content>
      <Content>
        <img src={NodeLogo} />
      </Content>
      <Content>
        <img src={MongodbLogo} id="mongo" />
      </Content>
      <Content>
        <img src={PythonLogo} />
      </Content>
      <Content>
        <img src={ExpressLogo} />
      </Content>
    </LanguageDiv>
  );
};

export default Languages;
