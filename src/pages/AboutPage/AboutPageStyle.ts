import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  overflow: hidden;
`;

export const AboutDiv = styled.div`
  height: 100vh;
  background-color: white;
  padding: 40px 50px 0 50px;
  font-size: 20px;
  letter-spacing: 1.1px;
  line-height: 30px;

  h1 {
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-top: 0;
    letter-spacing: 0;
  }

  h3 {
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 15px;
    font-family: "Alegreya Sans SC", sans-serif;
    letter-spacing: 0;
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
