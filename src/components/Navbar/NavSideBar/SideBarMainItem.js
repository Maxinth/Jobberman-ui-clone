import React from "react";
import { SideBarMain } from "./navSideBar.elements";
import GenerateSideBarList from "./GenerateSideBarList";
import PropTypes from "prop-types";

const SideBarMainItem = ({ offset, section }) => {
  console.log({ offset, section });
  return (
    <SideBarMain fromTop={offset}>
      <GenerateSideBarList items={section} />
    </SideBarMain>
  );
};

SideBarMainItem.propTypes = {
  offset: PropTypes.number,
  section: PropTypes.array,
};

export default SideBarMainItem;
