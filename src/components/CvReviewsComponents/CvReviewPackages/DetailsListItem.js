import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PropTypes from "prop-types";

const Text = styled.p`
  line-height: 1.7;
  transform: translateY(-10px);
  font-weight: 300;
`;

const BoldText = styled.span`
  font-weight: 600;
  color: inherit;
`;

const BulletPoint = styled(FiberManualRecordIcon)`
  margin-right: 1rem;
  font-size: 1rem !important;
`;

const DetailsItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: rgb(78, 85, 89);
  margin-bottom: 1rem;
`;

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
