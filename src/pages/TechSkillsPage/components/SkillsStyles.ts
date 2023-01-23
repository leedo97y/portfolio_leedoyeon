import styled from "styled-components";

export const LanguageDiv = styled.div`
  height: 350px;
  background-color: white;
  padding: 20px 40px 0 40px;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  img {
    width: 60px;
    height: 60px;
  }

  span {
    margin-top: 10px;
    color: black;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  #html {
    width: 65px;
    height: 65px;
  }

  #css {
    width: 65px;
    height: 65px;
  }

  #react {
    width: 65px;
    height: 60px;
  }

  #boot {
    width: 70px;
    height: 60px;
  }

  #mongo {
    width: 70px;
    height: 70px;
  }
`;

export const ToolDiv = styled.div`
  height: 200px;
  background-color: white;
  padding: 20px 40px 0 40px;
  padding-top: 20px;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  img {
    width: 60px;
    height: 60px;
  }

  span {
    margin-top: 10px;
    color: black;
  }
`;
