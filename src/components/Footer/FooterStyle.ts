import styled from "styled-components";

export const Info = styled.div`
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    filter: invert(100%);
  }

  @media screen and (max-height: 1000px) {
    height: 450px;
  }

  @media screen and (max-height: 950px) {
    height: 350px;
  }

  @media screen and (max-height: 900px) {
    height: 300px;
  }

  @media screen and (max-height: 850px) {
    height: 270px;
  }

  @media screen and (max-height: 750px) {
    height: 150px;
  }

  @media screen and (max-height: 600px) {
    height: 90px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-height: 550px) {
    height: 110px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-height: 500px) {
    height: 70px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
