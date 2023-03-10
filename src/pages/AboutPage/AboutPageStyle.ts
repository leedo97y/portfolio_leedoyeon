import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px 1fr;
  overflow: hidden;
`;

export const AboutDiv = styled.div`
  height: 100vh;
  background-color: white;
  padding: 40px 50px 0 50px;
  letter-spacing: 1.1px;
  line-height: 30px;
  font-family: "NanumSquareNeo";
  font-size: 16px;

  h1 {
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-top: 0;
    letter-spacing: 0;
    color: #164aba;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 7px;
    font-family: "Alegreya Sans SC", sans-serif;
    letter-spacing: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.14);
    color: #2e3340;
  }

  p {
    margin-bottom: 15px;
  }

  span {
    margin-bottom: 10px;
  }

  @media screen and (max-height: 950px) {
    height: 100vh;
    font-size: 13px;
    line-height: 24px;
    padding: 40px 50px 0 50px;

    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 22px;
    }

    p {
      margin-bottom: 10px;
    }

    span {
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 950px) {
    height: 100vh;
    font-size: 13px;
    line-height: 24px;
    padding: 40px 50px 0 50px;

    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 22px;
    }

    p {
      margin-bottom: 10px;
    }

    span {
      margin-bottom: 5px;
    }
  }
`;

export const Blue = styled.span`
  font-family: "NanumSquareNeoBold";
  color: #164aba;
  margin-right: 2px;
`;
