import NavLeft from "./NavLeft";
import NavRightMain from "./NavRight";
import NavSideBar from "./NavSideBar/NavSideBar";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import { useGlobalContext } from "../context";
import { Nav, NavHeader, NavRight, NavBackDrop } from "./nav.elements";

const Navbar = () => {
  const { variantProps, animateOpacity } = useVariants();
  const { toggleSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <>
      <Nav>
        <NavHeader>
          <NavLeft />
          {/* hidden on small and mobile-screens */}
          <NavRight>
            <NavRightMain />
          </NavRight>
          {/* hidden on small and mobile-screens */}
        </NavHeader>

        {/* show this backdrop fix for navbar only when the sidebar is in view */}
        {isSideBarOpen && (
          <motion.div
            variants={animateOpacity}
            onClick={toggleSideBar}
            {...variantProps}
          >
            <NavBackDrop />
          </motion.div>
        )}
      </Nav>
      <NavSideBar />
    </>
  );
};

export default Navbar;
