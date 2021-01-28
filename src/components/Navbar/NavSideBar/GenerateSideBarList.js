import React from "react";
import NavSideLink from "./NavSideLink";
const GenerateSideBarList = ({ items }) => {
  return (
    <ul className="navSidebar__nav">
      {items.map((item, index) => (
        <NavSideLink key={index} {...item} />
      ))}
    </ul>
  );
};

export default GenerateSideBarList;
