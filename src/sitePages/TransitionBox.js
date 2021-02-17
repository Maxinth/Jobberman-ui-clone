import { motion } from "framer-motion";
import { useVariants } from "../components/useVariants";
import React from "react";

const TransitionBox = ({ children }) => {
  const { pageVariant, variantProps } = useVariants();
  return (
    <motion.div variants={pageVariant(0.5, 0)} {...variantProps}>
      {children}
    </motion.div>
  );
};

export default TransitionBox;

/*
Custom component to do page transitions.

*/
