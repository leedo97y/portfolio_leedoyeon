import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const SideBarDiv = styled.div`
  width: 200px;
  height: 100vh;
  background-color: lightgrey;
  padding: 50px;
`;

export const MainDiv = styled.div`
  height: 100vh;
  background-color: white;
  padding: 50px;
`;

export const ProfileSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  font-size: 20px;
  font-weight: 300;
  font-family: "Alegreya Sans SC", sans-serif;

  h1 {
    margin-top: 10px;
    margin-bottom: -7px;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
`;
