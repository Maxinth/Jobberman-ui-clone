import React from "react";
import CircleControls from "../../components/CircleControls";
import CTA from "../CTA";
import PropTypes from "prop-types";

const ConnectBottomSection = ({
  items,
  makeCurrentSlide,
  matchCurrentItem,
}) => {
  return (
    <>
      <CircleControls
        data={items}
        setIndex={makeCurrentSlide}
        currentItem={matchCurrentItem}
      />
      <CTA text="view more companies hiring" goTo="/companies" />
    </>
  );
};

ConnectBottomSection.propTypes = {
  items: PropTypes.array,
  makeCurrentSlide: PropTypes.func,
  matchCurrentItem: PropTypes.func,
};
export default ConnectBottomSection;
