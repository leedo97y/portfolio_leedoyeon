import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  overflow: hidden;
`;

export const TechDiv = styled.div`
  height: 100vh;
  background-color: white;
  padding: 40px 50px 0 50px;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;

  h1 {
    font-size: 35px;
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 10px;
    margin-top: 0;
    color: #164aba;
  }

  h3 {
    font-size: 25px;
    font-weight: 400;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 5px;
    margin-top: 0;
    border-bottom: 1px solid #c9c9c9;
    color: #2e3340;
  }

  span {
    color: gray;
  }

  #lang {
    margin-top: 30px;
  }
`;
