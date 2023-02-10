import React from "react";
import { WholeBtn, Button } from "./SkillButtonStyle";
import HtmlLogo from "../../../assets/images/htmllogo.png";
import CssLogo from "../../../assets/images/csslogo.png";
import JsLogo from "../../../assets/images/jslogo.png";

import PythonLogo from "../../../assets/images/pythonlogo.png";

import FigmaLogo from "../../../assets/images/figmalogo.png";

const WeatherFrontButton: React.FC = () => {
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
    </WholeBtn>
  );
};

const WeatherBackButton: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={PythonLogo} alt="python" />
      </Button>
    </WholeBtn>
  );
};

const WeatherToolButton: React.FC = () => {
  return (
    <WholeBtn>
      <Button>
        <img src={FigmaLogo} alt="figma" />
      </Button>
    </WholeBtn>
  );
};

export { WeatherFrontButton, WeatherBackButton, WeatherToolButton };
