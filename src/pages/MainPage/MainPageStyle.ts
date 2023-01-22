import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  overflow: hidden;
`;

export const MainDiv = styled.div`
  height: 100vh;

  div {
    height: 250px;
    background-color: transparent;
    margin-top: 250px;
    padding: 50px;
    letter-spacing: 1.3px;
    font-weight: 400;
    font-family: "Quicksand", sans-serif;
  }
`;

export const Blue = styled.span`
  color: blue;
`;
