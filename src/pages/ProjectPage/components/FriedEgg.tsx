import React from "react";
import { Bold, Green } from "../ProjectPageStyle";
import Main from "../../../assets/images/friedeggMain.png";
import {
  FriedEggFrontSkill,
  FriedEggBackSkill,
  FriedEggTool,
} from "./FriedEggSkill";

const FriedEgg: React.FC = () => {
  return (
    <>
      <h1>계란후라이 - 농산물 쇼핑몰</h1>
      <span>2022년 10월 31일 ~ 11월 12일</span>
      <img src={Main} id="image" />
      <p>
        농장주가 직접 농산물을 등록하여 플랫폼을 통해 소비자와 거래할 수 있는
        <Bold> 계란후라이</Bold>라는 농산물 쇼핑몰을 만듬.
      </p>
      <p>
        엘리스 SW 트랙에서 진행한 <Green>Vanilla JS</Green> 프로젝트였으며,
        <br />
        백엔드 2명, 프론트 3명으로 구성되어 있었고 프론트, 백 공통언어로
        JavaScipt를 사용했다.
      </p>
      <p>
        마이페이지, 과거 주문내역 페이지, 주문별 상세 내역, 관리자 관리 페이지,
        에러페이지, 푸터 텀포넌트를 맡아 구현하였다.
      </p>
      <p>
        마이페이지는 session storage에 저장된 <Green>jwt</Green> 토큰을 받아와서
        로그인 한 사용자가 자신의 정보를 수정, 계정 탈퇴등이 가능하며 자신이
        주문한 내역 또한 볼 수 있도록 구현하였으며, 사용자 정보 수정에는
        <Green> Daum 주소 API</Green> 를 사용하여 사용자가 자신의 주소를
        입력하기 쉽게 구현하였다.
      </p>
      <p>
        과거 주문 내역 페이지는 마이페이지 내에서 자신이 과거에 주문했던 내역을
        주문서 이름으로 확인 할 수 있게 구현하였다.
        <br />
        또, 이에 대한 상세 내역은 주문별 상세 내역 페이지에서 볼 수 있도록
        구현하였다.
      </p>
      <p>
        관리자 관리 페이지는 관리자가 제품 관리, 카테고리 관리, 주문 관리를 할
        수 있도록 도입 페이지를 구현하였다.
      </p>
      <p>
        푸터는 거의 모든 페이지에 반복되는 코드였기 때문에 어떻게 넣어야 가장
        효율적일지 고민했던 부분이며,
        <br />
        푸터 HTML을 <Green> 컴포넌트화</Green> 하여 각 페이지에 넣는 것이 적합한
        방법이라고 판단했다.
        <br />
        방법을 서치 하다가 <Green>ejs</Green> 를 사용하면 HTML 코드를 컴포넌트화
        할 수 있다고 하여 ejs를 도입하게 되었다.
      </p>
      <p>
        결과적으로 ejs는 처음 써본 문법이었으나 코드의 재사용성을 높이고 코드가
        간결해져 코드 관리를 효율적으로 할 수 있게 되었다는 점, 서버의 데이터를
        받아와서 HTML 태그에서 바로 쓸 수 있다는 점에서 만족했다.
      </p>
      <p>
        또한 일정 관리를 <Green>Trello</Green> 를 이용하여 했는데, 사용법이
        간단하고 가시적으로 프로젝트 진행도가 보여서 좋았다.
      </p>
      <h3>skill</h3>
      <h4>frontend</h4>
      <FriedEggFrontSkill />
      <p id="add">
        Daum 주소 API
        <br />
        CKeditor
        <br />
        Swiper
      </p>
      <h4>backend</h4>
      <FriedEggBackSkill />
      <p id="add">
        express-validator <br />
        multer
        <br />
        cloudinary
        <br />
        jest
        <br />
        joi
      </p>
      <h4>tool</h4>
      <FriedEggTool />
      <h3>url</h3>
      <a href="https://drive.google.com/file/d/1I3fyRzdBMLiX_vOxWasrhFlgjrB7dRbr/view?usp=share_link">
        ▶︎ 시연영상
      </a>
      <a href="https://github.com/leedo97y/vegetable">▶︎ github repository</a>
    </>
  );
};

export default FriedEgg;
