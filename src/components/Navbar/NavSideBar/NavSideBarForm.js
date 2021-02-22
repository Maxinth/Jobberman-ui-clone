import React from "react";
import { SideBarForm, SideBarInput } from "./navSideBar.elements";
import NavSearchIcon from "./NavSearchIcon";

const NavSideBarForm = () => {
  return (
    <SideBarForm>
      <SideBarInput type="text" placeholder="Keyword Search" />
      <NavSearchIcon />
    </SideBarForm>
  );
};

export default NavSideBarForm;
