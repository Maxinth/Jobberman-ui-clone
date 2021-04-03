import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { NavLogo, NavLeftContainer } from "./NavSideBar/navSideBar.elements";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import React from "react";

const NavLeft = () => {
  const { toggleSideBar, handleLogoClick } = useGlobalContext();

  return (
    <NavLeftContainer>
      <IconButton onClick={toggleSideBar}>
        <MenuIcon />
      </IconButton>
      <Link to="/">
        <NavLogo src={logo} alt="jobber-man logo" onClick={handleLogoClick} />
      </Link>
    </NavLeftContainer>
  );
};

export default NavLeft;
