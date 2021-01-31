import React from "react";
import SearchIcon from "@material-ui/icons/Search";
const NavSideBarForm = () => {
  return (
    <form className="navSidebar__form">
      <input
        type="text"
        className="navSidebar__input"
        placeholder="Keyword Search"
      />
      <span className="navSidebar__searchIconContainer">
        <SearchIcon className="navSidebar__searchIcon" />
      </span>
    </form>
  );
};

export default NavSideBarForm;
