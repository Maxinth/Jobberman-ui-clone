import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";

import { useGlobalContext } from "../context";

const NavLeft = () => {
  const { toggleSideBar } = useGlobalContext();
  return (
    <div className="nav__left">
      <IconButton onClick={toggleSideBar}>
        <MenuIcon className="nav__menuIcon" />
      </IconButton>
      <img src={logo} alt="jobber-man logo" className="nav__logo" />
    </div>
  );
};

export default NavLeft;
