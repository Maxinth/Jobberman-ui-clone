import React from "react";
import { WhyContainer } from "./styled";
import GenerateWhyBoxes from "./GenerateWhyBoxes";
import PropTypes from "prop-types";

const WhyBoxes = ({ items, index, matchCurrentItem, itemPosition }) => {
  return (
    <WhyContainer>
      <GenerateWhyBoxes
        data={items}
        index={index}
        currentIndex={index}
        matchCurrentItem={matchCurrentItem}
        itemPosition={itemPosition}
      />
    </WhyContainer>
  );
};

WhyBoxes.propTypes = {
  items: PropTypes.array,
  index: PropTypes.number,
  matchCurrentItem: PropTypes.func,
  itemPosition: PropTypes.func,
};

export default WhyBoxes;
