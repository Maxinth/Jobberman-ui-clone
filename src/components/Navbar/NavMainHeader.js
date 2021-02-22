import React from "react";
import NavLeft from "./NavLeft";
import NavRightMain from "./NavRight";
import { NavHeader, NavRight } from "./nav.elements";

const NavMainHeader = () => {
  return (
    <NavHeader>
      <NavLeft />
      {/* hidden on small and mobile-screens */}
      <NavRight>
        <NavRightMain />
      </NavRight>
      {/* hidden on small and mobile-screens */}
    </NavHeader>
  );
};

export default NavMainHeader;
