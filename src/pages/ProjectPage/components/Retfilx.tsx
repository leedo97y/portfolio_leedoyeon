import React from "react";
import { Bold, RealRed } from "../ProjectPageStyle";
import RetfilxMain from "../../../assets/images/retfilxmain.png";
// import SkillButton from "./WeatherSkill";
import { RetfilxDeploy, RetfilxSkill, RetfilxTool } from "./RetfilxSkill";

const Retfilx: React.FC = () => {
  return (
    <>
      <h1>Refilx - Netfilx 클론 코딩</h1>
      <span>2022년 11월 13일 ~ 12월 04일</span>

      <img src={RetfilxMain} id="image" />
      <p>
        <RealRed>React</RealRed> 로 Netfilx의 UI를 클론코딩하였다. ( React +
        Netfilx =<Bold> Retfilx</Bold> )
      </p>
      <p>
        figma로 각 페이지를 디자인 한 뒤, 각자 페이지를 맡아 구현하였으며, 메인
        페이지의 헤더와 푸터, 프로필 이전 페이지를 구현하였다.
        <br />
        5명 모두 프론트였으므로, 배포나 데이터를 다루는 작업에 한계가 있었다.
        <br />
        따라서 간단한 클론코딩을 하나 해보기로 했고, 영상 쪽에서 UI 쪽으로
        흥미가 있었던 넷플릭스를 선택하게 되었다.
        <br />
        또, 배포는 <RealRed>vercel</RealRed> 이나
        <RealRed> github pages</RealRed> 로 진행하기로 결정했으며, 우선은
        데이터가 필요없는 페이지만 구현하기로 정했다.
      </p>
      <p>
        메인 페이지를 구성할 때 메인 페이지에 자동으로 재생되는 영상을 어떻게
        넣을 것인가 하는 고민사항과
        <br />
        라우팅 설정에 대한 고민사항이 있었다.
      </p>
      <p>
        우선 영상은 백엔드를 담당하는 사람이 없었기에 영상 데이터를 받아와서
        다룰 수 있는 상황이 아니었으므로,
        <br />
        <RealRed>react-player</RealRed> 를 사용하여 유투브에서 가져온 링크를
        넣어 재생가능하게 해주었다.
      </p>
      <p>
        라우팅은 로그인 시 부여한 토큰의 유무에 따라 토큰이 없을 경우 인트로
        페이지가 첫 페이지,
        <br />
        토큰이 있을 경우 메인페이지가 첫 페이지가 되도록 설정해 준 것이었는데,
        <br />
        토큰 값이 변수에 저장된 상태로 리로딩이 되지 않아서 문제가 발생했다.
        <br />
        따라서, 로그인 페이지에서 로그인 완료 후 첫 페이지로 navigate를 해주는
        코드 뒤에
        <br />
        리로딩을 해주는 코드를 추가하여 문제를 해결하였다.
      </p>
      <p>
        아이콘은 <RealRed>react-icons</RealRed> 를 import해서 구현하였다.
        <br />
        import 문이 좀 길어지는 단점이 있지만, 아이콘을 컴포넌트처럼 삽입하여
        편리성 측면에서는 좋았다.
        <br />
        또, 스타일 코드에서 svg 로 아이콘의 스타일을 일괄 조정해줄 수 있는
        간편함도 좋았다.
      </p>
      <p>
        표시된 영화 정보들은 open movie API 중 netfilx 의 영화 정보를 제공해주는
        API를 사용해서 구현하였다.
      </p>

      <h3>skill</h3>
      <h4>frontend</h4>
      <RetfilxSkill />
      <h4>deploy</h4>
      <RetfilxDeploy />
      <h4>tool</h4>
      <RetfilxTool />

      <h3>url</h3>
      {/* <a href="https://cdn-api.elice.io/recruit-api-attachment/attachment/42f906a51bba4f29addc091f549feaab/weather.MP4">
        ▶︎ 시연영상
      </a> */}
      <a href="https://github.com/BBBBBreak/Retflix">
        ▶︎ github team repository
      </a>
      <a href="https://github.com/leedo97y/Retflix">
        ▶︎ github personal repository
      </a>
      <a href="https://retflix.vercel.app/">▶︎ Retfilx page</a>
    </>
  );
};

export default Retfilx;
