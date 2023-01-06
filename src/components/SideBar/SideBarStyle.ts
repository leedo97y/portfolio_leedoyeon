import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`;

export const SideBarDiv = styled.div`
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
  width: 300px;
  height: 200px;
  font-size: 25px;
  font-weight: 300;

  h1 {
    margin-top: 10px;
    margin-bottom: -7px;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;

  & :active {
    color: #007cfa;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  & :focus {
    span {
      color: #007cfa;
    }
  }

  & :active {
    span {
      color: #007cfa;
    }
  }
`;
