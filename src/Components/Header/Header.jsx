import React from "react";
import * as S from "./header.js";
import { NavLink } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  return (
    <S.Header>
      <NavLink
        to="/"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/sobre"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Sobre
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Portfólio
      </NavLink>
      <img
        src={theme ? "/assets/icons/dark.svg" : "/assets/icons/light.svg"}
        alt="botão troca de tema"
        onClick={() => setTheme(!theme)}
        className="buttonTheme"
      />
    </S.Header>
  );
};

export default Header;
