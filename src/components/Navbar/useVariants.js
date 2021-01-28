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
      duration: 3,
    },
  },
};

// custom hook to expose variants and the variant props
const useVariants = () => {
  return { variantProps, animateOpacity };
};

export default useVariants;
