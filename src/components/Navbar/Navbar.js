import { Link } from "react-router-dom";
// import "./navbar.css";
import NavLeft from "./NavLeft";
import NavSideBar from "./NavSideBar/NavSideBar";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import { useGlobalContext } from "../context";
import { Nav } from "./nav.elements";

const Navbar = () => {
  const { variantProps, animateOpacity } = useVariants();
  const { toggleSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <>
      <Nav>
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

        {/* show this backdrop fix for navbar only when the sidebar is in view */}
        {isSideBarOpen && (
          <motion.div
            className="nav__backdrop"
            variants={animateOpacity}
            onClick={toggleSideBar}
            {...variantProps}
          ></motion.div>
        )}
      </Nav>
      <NavSideBar />
    </>
  );
};

export default Navbar;
