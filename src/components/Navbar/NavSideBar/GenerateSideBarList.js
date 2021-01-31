import React from "react";
import NavSideLink from "./NavSideLink";
import PropTypes from "prop-types";

import { SideBarListContainer } from "./navSideBar.elements";

const GenerateSideBarList = ({ items }) => {
  return (
    <SideBarListContainer>
      {items.map((item, index) => (
        <NavSideLink key={index} {...item} />
      ))}
    </SideBarListContainer>
  );
};

GenerateSideBarList.propTypes = {
  items: PropTypes.array,
};
export default GenerateSideBarList;
