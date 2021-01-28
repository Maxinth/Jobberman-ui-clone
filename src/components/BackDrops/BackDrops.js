import React from "react";
import "./backdrops.css";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

const BackDrops = () => {
  const { animateOpacity, variantProps } = useVariants();
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();
  return (
    <>
      {isSideBarOpen ? (
        <motion.div
          className="navSideBar__backdrop"
          variants={animateOpacity}
          onClick={toggleSideBar}
          {...variantProps}
        ></motion.div>
      ) : null}
    </>
  );
};

export default BackDrops;
