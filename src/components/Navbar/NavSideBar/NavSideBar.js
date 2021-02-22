import React from "react";
import { useGlobalContext } from "../../context";
import { NavSideBarContainer } from "./navSideBar.elements";
import SideBarMenuAndLogo from "./SideBarMenuAndLogo";
import SideBarMain from "./SideBarMain";

const NavSideBar = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();

  return (
    <NavSideBarContainer state={isSideBarOpen}>
      <SideBarMenuAndLogo toggleSideBar={toggleSideBar} />
      <SideBarMain />
    </NavSideBarContainer>
  );
};

export default NavSideBar;
