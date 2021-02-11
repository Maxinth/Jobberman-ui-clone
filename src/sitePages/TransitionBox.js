import { motion } from "framer-motion";
import { useVariants } from "../components/useVariants";

const TransitionBox = ({ children }) => {
  const { pageVariant, variantProps } = useVariants();
  return (
    <motion.div variants={pageVariant()} {...variantProps}>
      {children}
    </motion.div>
  );
};

export default TransitionBox;

/*
Custom component to do page transitions.

*/
