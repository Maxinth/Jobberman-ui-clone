import React from "react";
import { NavBtn, NavRightLink as NavLink } from "./nav.elements";
import GenerateNavLinks from "./GenerateNavLinks";

const NavRightMain = () => {
  return (
    <>
      <GenerateNavLinks />
      <NavBtn>
        <NavLink to="/">post a free job</NavLink>
      </NavBtn>
    </>
  );
};

export default NavRightMain;
