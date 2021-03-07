import React from "react";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import { NavSideBarBackDrop } from "./styled";

const BackDrops = () => {
  const { animateOpacity, variantProps } = useVariants();
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();
  return (
    <>
      {isSideBarOpen ? (
        <motion.div>
          <NavSideBarBackDrop
            variants={animateOpacity}
            onClick={toggleSideBar}
            {...variantProps}
          ></NavSideBarBackDrop>
        </motion.div>
      ) : null}
    </>
  );
};

export default BackDrops;
