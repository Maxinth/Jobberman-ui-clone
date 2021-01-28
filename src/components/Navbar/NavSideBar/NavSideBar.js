import React from "react";
import NavLeft from "../NavLeft";
import "./navSideBar.css";
import { useGlobalContext } from "../../context";
import SearchIcon from "@material-ui/icons/Search";
import { data } from "./data";
import GenerateSideBarList from "./GenerateSideBarList";

const NavSideBar = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();
  const classByState = isSideBarOpen ? "open" : "closed";
  const { mainSection, sign, post } = data;
  return (
    <section className={`navSidebar ${classByState}`}>
      <section className="navSidebar__navLeftContainer">
        <NavLeft toggleSideBar={toggleSideBar} />
      </section>
      <div className="navSidebar__container">
        <section className="navSidebar__main">
          <form className="navSidebar__form">
            <input
              type="text"
              className="navSidebar__input"
              placeholder="Keyword Search"
            />
            <span className="navSidebar__searchIconContainer">
              <SearchIcon className="navSidebar__searchIcon" />
            </span>
          </form>

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
    </section>
  );
};

export default NavSideBar;
