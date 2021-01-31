import React from "react";
import NavLeft from "../NavLeft";
// import "./navSideBar.css";
import { useGlobalContext } from "../../context";
import { data } from "./data";
import GenerateSideBarList from "./GenerateSideBarList";
import NavSideBarForm from "./NavSideBarForm";
import { NavSideBarContainer, NavLeftContainer } from "./navSideBar.elements";
const NavSideBar = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();
  // const classByState = isSideBarOpen ? "open" : "closed";
  const { mainSection, sign, post } = data;
  return (
    <NavSideBarContainer state={isSideBarOpen}>
      <NavLeftContainer>
        <NavLeft toggleSideBar={toggleSideBar} />
      </NavLeftContainer>
      <div className="navSidebar__container">
        <section className="navSidebar__main">
          <NavSideBarForm />

          <section className="navSidebar__quickNav">
            <GenerateSideBarList items={mainSection} />
          </section>

          <section className="navSidebar__sign">
            <GenerateSideBarList items={sign} />
          </section>

          <section className="navSidebar__postJobs">
            <GenerateSideBarList items={post} />
          </section>
        </section>
      </div>
    </NavSideBarContainer>
  );
};

export default NavSideBar;
