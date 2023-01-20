import React from "react";
import { WholeBtn, Button } from "./SkillButtonStyle";
import HtmlLogo from "../../../assets/images/htmllogo.png";
import CssLogo from "../../../assets/images/csslogo.png";
import JsLogo from "../../../assets/images/jslogo.png";
import PythonLogo from "../../../assets/images/pythonlogo.png";

const SkillButton: React.FC = () => {
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
        <img src={PythonLogo} alt="python" />
      </Button>
    </WholeBtn>
  );
};

export default SkillButton;
