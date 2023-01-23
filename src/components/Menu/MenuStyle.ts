import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;

  .active {
    color: #fbab34;
  }

  button {
    width: 200px;
    height: 80px;
    font-size: 25px;
    font-weight: 400;
    font-family: "Alegreya Sans SC", sans-serif;
    background-color: transparent;
    border: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  :hover {
    color: #fbab34;
  }
`;
