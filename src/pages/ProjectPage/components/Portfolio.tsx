import React from "react";
import { Bold, Blue } from "../ProjectPageStyle";
import PortfolioImg from "../../../assets/images/portfolioImage.png";
import {
  PortfolioSkill,
  PortfolioTool,
  PortfolioDeploy,
} from "./PortfolioSkill";

const Portfolio: React.FC = () => {
  return (
    <>
      <h1>포트폴리오 페이지</h1>
      <span>2023년 01월 04일 ~ 23일</span>

      <img src={PortfolioImg} id="image" style={{ height: "350px" }} />

      <p>
        <Bold>포트폴리오 웹 페이지</Bold>를 만들었다.
        <br />
        백엔드 없이 정적인 페이지로 <Blue>React</Blue>와 <Blue>TypeScript</Blue>
        를 이용하여 구현했으며,
        <br />
        바로 전에 했던 프로젝트에서 React + TypeScript 를 사용하여 이를 잊지
        않기 위한 목적으로 사이트를 만들며 복기했다.
      </p>
      <p>
        프로젝트 기술과 모든 프로젝트를 보여주는 페이지를 구성하는데에 시간이 꽤
        걸렸으며,
        <br />
        모든 프로젝트를 보여주는 페이지에서 버튼을 누르면 아래에
        <Blue> state</Blue>를 사용해서 true 일 경우 프로젝트가 뜨는 형식으로
        구성하려다보니 제어하기가 생각보다 까다로웠다.
      </p>
      <p>
        배포는 <Blue>vercel</Blue>을 이용해서 했으며, 배포 방식이 비교적 쉬워서
        좋았다.
        <br />
        아직은 반응형 페이지가 아니지만 빠른 시일 내에 반응형으로 만들 계획이다.
      </p>

      <h3>skill</h3>
      <h4>frontend</h4>
      <PortfolioSkill />
      <h4>tool</h4>
      <PortfolioTool />
      <h4>deploy</h4>
      <PortfolioDeploy />
      <h3>url</h3>
      <a href="https://github.com/leedo97y/portfolio_leedoyeon">
        ▶︎ Portfolio Page
      </a>
      <a href="https://github.com/leedo97y/portfolio_leedoyeon">
        ▶︎ github repository
      </a>
    </>
  );
};

export default Portfolio;
