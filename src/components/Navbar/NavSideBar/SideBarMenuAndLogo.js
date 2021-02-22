import React from "react";
import PropTypes from "prop-types";
import NavLeft from "../NavLeft";
import { NavSection } from "./navSideBar.elements";

const SideBarMenuAndLogo = ({ toggleSideBar }) => {
  return (
    <NavSection pad={true}>
      <NavLeft toggleSideBar={toggleSideBar} />
    </NavSection>
  );
};

SideBarMenuAndLogo.propTypes = {
  toggleSideBar: PropTypes.func,
};

export default SideBarMenuAndLogo;
