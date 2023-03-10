import styled from "styled-components";

export const WholeBtn = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media screen and (max-height: 780px) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.div`
  margin-right: 5px;
  margin-top: 5px;
  font-weight: 500;

  img {
    width: 50px;
    height: 50px;
    margin: 0;
    margin-right: 10px;
    margin-left: 5px;
    padding: 5px;
    border-radius: 30px;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.13);
  }

  @media screen and (max-height: 780px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
