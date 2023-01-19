import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const TechDiv = styled.div`
  height: 500px;
  background-color: white;
  padding: 50px;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;

  h1 {
    font-size: 35px;
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  h3 {
    font-size: 25px;
    font-weight: 400;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 5px;
    border-bottom: 1px solid #c9c9c9;
  }

  span {
    color: gray;
  }

  #lang {
    margin-top: 30px;
  }
`;
