import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { NavLogo, NavLeftContainer } from "./NavSideBar/navSideBar.elements";
import { useGlobalContext } from "../context";

const NavLeft = () => {
  const { toggleSideBar } = useGlobalContext();
  return (
    <NavLeftContainer>
      <IconButton onClick={toggleSideBar}>
        <MenuIcon />
      </IconButton>
      <NavLogo src={logo} alt="jobber-man logo" />
    </NavLeftContainer>
  );
};

export default NavLeft;
