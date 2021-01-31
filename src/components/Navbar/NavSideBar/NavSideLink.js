import React from "react";

import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import {
  SideBarListItem,
  SideBarLink,
  LinkIconContainer,
} from "./navSideBar.elements";
const NavSideLink = ({ linkText, goTo }) => {
  let linkClass;
  // setting the class based on linkText
  switch (linkText) {
    case "find a job":
    case "soft skills training":
    case "skill assessments":
    case "log in":
    case "sign up":
    case "post a free job":
      linkClass = "main";
      break;
    default:
      linkClass = "";
      break;
  }

  return (
    <SideBarListItem>
      <SideBarLink to={goTo} item={linkClass}>
        {linkText}

        {/* show only when the linkText is 'post a free job' */}
        {linkText === "post a free job" && (
          <LinkIconContainer>
            <CheckCircleOutlineOutlinedIcon />
          </LinkIconContainer>
        )}
      </SideBarLink>
    </SideBarListItem>
  );
};

export default NavSideLink;
