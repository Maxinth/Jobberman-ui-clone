import React from "react";
import { Text, BoldText, BulletPoint, DetailsItem } from "./styled";
import PropTypes from "prop-types";

const DetailsListItem = ({ boldText, text }) => {
  return (
    <DetailsItem>
      <BulletPoint />
      <Text>
        <BoldText>{boldText}</BoldText> : {text}
      </Text>
    </DetailsItem>
  );
};

DetailsListItem.propTypes = {
  boldText: PropTypes.string,
  text: PropTypes.string,
};

export default DetailsListItem;
