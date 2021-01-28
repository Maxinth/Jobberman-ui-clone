import React from "react";
import { Link } from "react-router-dom";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
const NavSideLink = ({ linkText, goTo }) => {
  // setting the class based on linkText
  let linkClass;
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
    <li className="navSidebar__listItem">
      <Link to={goTo} className={`navSidebar__link ${linkClass}`}>
        {linkText}
        {/* show only when the linkText is 'post a free job' */}
        {linkText === "post a free job" && (
          <span className="navSidebar__linkIconContainer">
            <CheckCircleOutlineOutlinedIcon className="navSidebar__checkIcon" />
          </span>
        )}
      </Link>
    </li>
  );
};

export default NavSideLink;
