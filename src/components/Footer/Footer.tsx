import React from "react";
import { Info } from "./FooterStyle";
import GithubLogo from "../../assets/images/githublogo.svg";
import VelogLogo from "../../assets/images/veloglogo.svg";
import GmailLogo from "../../assets/images/gmail.svg";

const Footer: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

export default Footer;
