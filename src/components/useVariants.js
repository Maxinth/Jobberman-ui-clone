const variantProps = {
  initial: "hidden",
  animate: "visible",
};

const animateOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

// custom hook to expose variants and the variant props
export const useVariants = () => {
  return { variantProps, animateOpacity };
};
