import React from "react";
import NavLeft from "../NavLeft";
import "./navSideBar.css";
import { useGlobalContext } from "../../context";

const NavSideBar = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();
  const classByState = isSideBarOpen ? "open" : "closed";

  return (
    <section className={`navSidebar ${classByState}`}>
      <section className="navSidebar__navLeftContainer">
        <NavLeft toggleSideBar={toggleSideBar} />
      </section>
      <div className="navSidebar__container">
        <section className="navSidebar__main"></section>
      </div>
    </section>
  );
};

export default NavSideBar;
