import React from "react";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import PropTypes from "prop-types";
import { NavBackDrop } from "./nav.elements";

const NavMainBackDrop = ({ toggleSideBar }) => {
  const { variantProps, animateOpacity } = useVariants();

  return (
    <motion.div
      variants={animateOpacity}
      onClick={toggleSideBar}
      {...variantProps}
    >
      <NavBackDrop />
    </motion.div>
  );
};

NavMainBackDrop.propTypes = {
  toggleSideBar: PropTypes.func,
};

export default NavMainBackDrop;
