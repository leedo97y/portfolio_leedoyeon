import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const SideBarDiv = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #20489f;
  color: #fff;
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
  height: 250px;
  font-size: 20px;
  font-weight: 300;
  font-family: "Alegreya Sans SC", sans-serif;

  h1 {
    margin-top: 10px;
    margin-bottom: -9px;
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-top: 20px;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    filter: invert(100%);
  }
`;
