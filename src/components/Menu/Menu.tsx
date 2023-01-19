import React from "react";
import { Menu, NavbarLink } from "./MenuStyle";

const MenuComponent: React.FC = () => {
  return (
    <div>
      <Menu>
        <button>
          <NavbarLink to="/">main</NavbarLink>
        </button>
        <button>
          <NavbarLink to="/about">about me</NavbarLink>
        </button>
        <button>
          <NavbarLink to="/tech">tech skills</NavbarLink>
        </button>
        <button>
          <NavbarLink to="/project">project</NavbarLink>
        </button>
      </Menu>
    </div>
  );
};

export default MenuComponent;
