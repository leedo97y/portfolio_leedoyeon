import styled from "styled-components";
import Ballons from "../../assets/images/balloons.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  overflow: hidden;

  #layer {
    width: 100%;
    height: 100vh;
    background-image: url(${Ballons});
    background-size: cover;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;

  div {
    height: 250px;
    background-color: transparent;
    margin-top: 250px;
    padding: 50px;
    letter-spacing: 1.3px;
    font-weight: 300;
    font-size: 25px;
    font-family: "NanumSquareNeoBold";
  }

  @media screen and (max-height: 700px) {
    height: 100vh;

    div {
      height: 180px;
      font-size: 20px;
      margin-top: 200px;
    }
  }

  @media screen and (max-height: 550px) {
    height: 100vh;

    div {
      height: 165px;
      font-size: 20px;
      margin-top: 160px;
    }
  }

  @media screen and (max-height: 500px) {
    height: 100vh;

    div {
      height: 150px;
      font-size: 18px;
      margin-top: 130px;
    }
  }
`;

export const Bold = styled.span`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 25px;

  @media screen and (max-height: 700px) {
    font-size: 20px;
  }

  @media screen and (max-height: 500px) {
    font-size: 18px;
  }
`;

export const Blue = styled.span`
  font-family: "NanumSquareNeoExtraBold";
  color: #164aba;
  font-size: 25px;

  @media screen and (max-height: 700px) {
    font-size: 20px;
  }

  @media screen and (max-height: 500px) {
    font-size: 18px;
  }
`;
