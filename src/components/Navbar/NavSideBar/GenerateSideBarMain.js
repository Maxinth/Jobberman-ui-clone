import React from "react";
import { sidebarItems } from "./data";
import SideBarMainItem from "./SideBarMainItem";

const GenerateSideBarMain = () => {
  console.log(sidebarItems);
  return (
    <>
      {sidebarItems.map((item, index) => (
        <SideBarMainItem key={index} {...item} />
      ))}
    </>
  );
};

export default GenerateSideBarMain;
