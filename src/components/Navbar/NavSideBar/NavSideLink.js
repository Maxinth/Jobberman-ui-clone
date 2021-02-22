import React from "react";
import { SideBarListItem, SideBarLink } from "./navSideBar.elements";
import { styleLink } from "./data";
import CheckIcon from "./CheckIcon";

const NavSideLink = ({ linkText, goTo }) => {
  let modifyLink = styleLink(linkText);

  return (
    <SideBarListItem>
      <SideBarLink to={goTo} item={modifyLink}>
        {linkText}
        {/* show only when the linkText is 'post a free job' */}
        {linkText === "post a free job" && <CheckIcon />}
      </SideBarLink>
    </SideBarListItem>
  );
};

export default NavSideLink;
