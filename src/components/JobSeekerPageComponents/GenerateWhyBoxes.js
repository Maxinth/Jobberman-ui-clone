import PropTypes from "prop-types";
import Why from "./Why";
import React from "react";

const GenerateWhyBoxes = ({
  index,
  data,
  currentIndex,
  matchCurrentItem,
  itemPosition,
}) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <Why
          key={itemIndex}
          {...item}
          itemIndex={itemIndex}
          currentIndex={currentIndex}
          matchItem={matchCurrentItem(itemIndex)}
          position={itemPosition(index, itemIndex, data)}
        />
      ))}
    </>
  );
};

GenerateWhyBoxes.propTypes = {
  data: PropTypes.array,
  currentIndex: PropTypes.number,
  matchCurrentItem: PropTypes.func,
};
export default GenerateWhyBoxes;
