import React from "react";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import styled from "styled-components";

const NavSideBarBackDrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  cursor: pointer;
`;

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
