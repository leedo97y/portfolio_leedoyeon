import React from "react";
import { Bold } from "../ProjectPageStyle";
import WeatherProject from "../../../assets/images/weatherProject.png";
import SkillButton from "./WeatherSkill";

const Weather: React.FC = () => {
  return (
    <>
      <h1>오늘 뭐 입지?</h1>
      <span>2022년 02월 09일 ~ 20일</span>

      <img src={WeatherProject} id="image" />
      <p>
        집을 나설때마다 애매한 날씨 때문에 <Bold> 오늘 뭐 입지?</Bold> 고민하는
        사람들을 위해 기온별 옷차림을 알려주는 웹페이지를 만들었다.
      </p>
      <p>
        open Weather API를 사용하였으며, 첫 프로젝트였다.
        <br />
        백엔드 한명에 프론트 4명으로 구성되어 있었지만, 모두 개발 자체가
        처음이었기에 언어를 다루는 데 미숙하여 프론트는 Vanilla JS로만 구성헀다.
      </p>
      <p>
        프로젝트가 진행됨에 따라, 기온에 따라 옷차림을 보여줘야 하는데 아이콘을
        넣었을때 날씨에 따라 어떻게 바뀌게 할 것인지,
        <br />
        이야기 부분에서 사용자의 아이디를 어떻게 정할 것인지 등의 고민사항들이
        있었다.
      </p>
      <p>
        옷 아이콘은 팀원 간의 회의 끝에 대표가 될만한 옷 몇 개를 선정한 뒤, 이를
        날씨 범위에 따라 다르게 나타나도록 구현하였고,
        <br />
        이야기 부분은 사용자가 로그인 후에 이용할 수 있는 해당 지역 날씨에 대한
        본인의 의견을 남기는 공간인데, 회의 끝에 제목 대신에 본인의 지역을 적는
        칸을 만들어 구현하였다.
      </p>
      <p>
        회원가입 폼과 로그인 폼 등을 디자인 하였으며, 첫 협업이라 소통에
        미숙했음에도 불구하고 해시태그를 통해 상세 옷차림을 알려주는 부분, 한 줄
        참견 등 아이디어를 내며 기획의 즐거움을 느낄 수 있었다.
      </p>
      <h3>skill</h3>
      <SkillButton />
      <h3>url</h3>
      <a href="https://cdn-api.elice.io/recruit-api-attachment/attachment/42f906a51bba4f29addc091f549feaab/weather.MP4">
        ▶︎ 시연영상
      </a>
      <a href="https://github.com/maino77/sparatacoding-weather-test">
        ▶︎ github repository
      </a>
    </>
  );
};

export default Weather;
