import React from "react";
import { Bold, Red } from "../ProjectPageStyle";
import TripMatchMain from "../../../assets/images/tripmatchMain.png";
import SkillButton from "./WeatherSkill";
import {
  TripMatchBackSkill,
  TripMatchFrontSkill,
  TripMatchDeploy,
  TripMatchTool,
} from "./TripMatchSkill";

const TripMatch: React.FC = () => {
  return (
    <>
      <h1>TripMatch - 여행 동행자 매칭 서비스</h1>
      <span>2022년 12월 12일 ~ 30일</span>
      <p id="prize">※ 엘리스 SW 3기 2차 프로젝트 시상식 최우수상 수상</p>

      <img src={TripMatchMain} id="image" />
      <p>
        혼자 국내 여행하는 사람들을 위한 서비스인 여행 동행자 매칭 서비스
        <Bold> TripMatch</Bold> 를 만들었다.
      </p>
      <p>
        기획을 체계적으로 했으며, 총 3일 정도 페이지에 필요한 사항들을
        <Red> Figma, Figjam</Red> 을 사용하여 기획하였다.
        <br />
        <Red>Figma</Red> 의 <Red>ERD 테이블 기능</Red> 을 사용하여 각 페이지에
        어떤 데이터가 들어와야 하는지 적어주었는데 이 점이 백엔드가 한명인
        부담을 덜어주었다.
        <br />
        프론트 5명, 백 1명으로 구성되었다. 내가 쓴 게시글 내역, 나의 댓글 내역,
        신청 받은 내역, 신청한 내역과 동행 신청 취소, 리뷰 기능을 담당했다.
      </p>

      <p>
        타인과의 동행을 해야하는 서비스이기 때문에 어떻게 해야 <Red>신뢰</Red>를
        높일 수 있을지가 관건이었는데,
        <br />
        고민 끝에 동행 신청자가 상대방을 어느 정도 신뢰하게 만들 수 있는 척도를
        제공하는 리뷰 모달 기능을 구현했으며,
        <br />
        별점을 입력하고 확인 버튼을 누를때 5점 만점 기준으로 점수가 데이터의
        <Red> matchPoint</Red> 에 입력되도록 만들었다.
        <br />
        이렇게 보내진 점수는 상대방의 정보에서 환산된 평균 점수로 확인할 수
        있으며, 마이 페이지 헤더 부분에서도 보이게 구현하였다.
      </p>
      <p>
        신청한 내역에서는 <Red>Date </Red>객체와 <Red>getTime </Red>메소드를
        사용해 날짜를 계산하여 7일간만 리뷰 버튼이 보이도록 했고,
        <br />
        같은 방식으로 가시성을 위해 리뷰 버튼 밑에 여행이 끝난후 몇 일이
        지났는지 알려주는 문구를 같이 띄워주도록 구현했다.
        <br />
        또한, 범죄 예방을 위해 동행자의 개인정보를 어느 정도 보호하기 위해 신청
        status 가 수락일 경우에 한해 상대방의 연락 정보를 띄워주도록 구현하였다.
        <br />
        이러한 연락 정보는 SNS 아이디, 핸드폰 번호 등 다양한 연락 수단을 적을 수
        있도록 설정했다.
      </p>

      <h3>skill</h3>
      <h4>frontend</h4>
      <TripMatchFrontSkill />
      <p id="add">
        RTK query
        <br />
        toast UI editor
        <br />
        cloudinary
      </p>
      <h4>backend</h4>
      <TripMatchBackSkill />
      <p id="add">
        nodemailer
        <br />
        request
        <br />
        nanoid
        <br />
        bcrypt
        <br />
        yamljs
      </p>
      <h4>deploy</h4>
      <TripMatchDeploy />
      <h4>tool</h4>
      <TripMatchTool />
      <h3>url</h3>
      <a href="https://drive.google.com/file/d/1pUVAXMA1YtMgFE6_HKV3qnQrUT_zsGUm/view?usp=share_link">
        ▶︎ 시연영상
      </a>
      <a href="https://elice.notion.site/SW-3-8-0e13511025ba40caa2a9fd7f054d6183">
        ▶︎ 프로젝트 설명 노션 페이지
      </a>
      <a href="https://github.com/leedo97y/TripMatch">▶︎ github repository</a>
      <a href="https://www.figma.com/file/4bLsUoLZ1HW0FUGzgelvmP/figma-flowchart?node-id=0%3A1">
        ▶︎ Figma link
      </a>
      <a href="http://kdt-sw3-team08.elicecoding.com/">▶︎ TripMatch page</a>
    </>
  );
};

export default TripMatch;
