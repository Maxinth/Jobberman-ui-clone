import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import NavLeft from "./NavLeft";
import NavSideBar from "./NavSideBar/NavSideBar";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <header className="nav__header">
          <NavLeft />

          {/* hidden on small and mobile-screens */}
          <div className="nav__right">
            <span className="nav__linkContainer">
              <Link to="/" className="nav__link">
                log in
              </Link>
            </span>
            <span className="nav__linkContainer">
              <Link to="/" className="nav__link">
                sign up
              </Link>
            </span>
            <button className="nav__btn">
              <Link to="/" className="nav__link">
                post a free job
              </Link>
            </button>
          </div>
        </header>
      </nav>
      <NavSideBar />
    </>
  );
};

export default Navbar;
