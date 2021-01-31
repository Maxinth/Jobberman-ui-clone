import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  SearchIconContainer,
  SideBarForm,
  SideBarInput,
} from "./navSideBar.elements";
const NavSideBarForm = () => {
  return (
    <SideBarForm>
      <SideBarInput type="text" placeholder="Keyword Search" />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </SideBarForm>
  );
};

export default NavSideBarForm;
