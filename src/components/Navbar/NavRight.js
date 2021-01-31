import React from "react";
// import { NavLink } from "react-router-dom";
import { LinkContainer, NavBtn, NavRightLink as NavLink } from "./nav.elements";
const NavRightMain = () => {
  return (
    <>
      <LinkContainer>
        <NavLink to="/" className="nav__link">
          log in
        </NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="/" className="nav__link">
          sign up
        </NavLink>
      </LinkContainer>
      <NavBtn>
        <NavLink to="/" className="nav__link">
          post a free job
        </NavLink>
      </NavBtn>
    </>
  );
};

export default NavRightMain;
