import NavSideBar from "./NavSideBar/NavSideBar";
import { useGlobalContext } from "../context";
import { Nav } from "./nav.elements";
import React from "react";
import NavMainHeader from "./NavMainHeader";
import NavMainBackDrop from "./NavMainBackDrop";

const Navbar = () => {
  const { toggleSideBar, isSideBarOpen } = useGlobalContext();

  return (
    <>
      <Nav>
        <NavMainHeader />
        {/* show this backdrop fix for navbar only when the sidebar is in view */}
        {isSideBarOpen && <NavMainBackDrop toggleSideBar={toggleSideBar} />}
      </Nav>
      <NavSideBar />
    </>
  );
};

export default Navbar;
