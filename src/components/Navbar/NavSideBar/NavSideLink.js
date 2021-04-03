import React from "react";
import { SideBarListItem, SideBarLink } from "./navSideBar.elements";
import { styleLink } from "./data";
import CheckIcon from "./CheckIcon";
import { useGlobalContext } from "../../context";

const NavSideLink = ({ linkText, goTo }) => {
  let modifyLink = styleLink(linkText);
  const { toggleSideBar } = useGlobalContext();

  return (
    <SideBarListItem>
      <SideBarLink to={goTo} item={modifyLink} onClick={toggleSideBar}>
        {linkText}
        {/* show only when the linkText is 'post a free job' */}
        {linkText === "post a free job" && <CheckIcon />}
      </SideBarLink>
    </SideBarListItem>
  );
};

export default NavSideLink;
