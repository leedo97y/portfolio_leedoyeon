import styled from "styled-components";
import Ballons from "../../assets/images/balloons.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
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
`;

export const Bold = styled.span`
  font-family: "NanumSquareNeoExtraBold";
  /* font-weight: 500; */
  font-size: 25px;
`;

export const Blue = styled.span`
  font-family: "NanumSquareNeoExtraBold";
  color: #164aba;
  font-size: 25px;
`;
