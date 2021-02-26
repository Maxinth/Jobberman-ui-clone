import React from "react";
import { motion } from "framer-motion";
import { useVariants } from "./useVariants";

const DropChildFromTop = ({ children }) => {
  const { slideFromTop, variantProps } = useVariants();
  return (
    <motion.div variants={slideFromTop} {...variantProps}>
      {children}
    </motion.div>
  );
};

export default DropChildFromTop;
