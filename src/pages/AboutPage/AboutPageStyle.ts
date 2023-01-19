import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const AboutDiv = styled.div`
  height: 400px;
  background-color: white;
  padding: 50px;
  font-size: 20px;
  letter-spacing: 1.3px;
  line-height: 30px;

  h1 {
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
  }

  h3 {
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 15px;
    font-family: "Alegreya Sans SC", sans-serif;
    border-bottom: 1px solid #c9c9c9;
  }

  p {
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 30px;
  }

  span {
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;
