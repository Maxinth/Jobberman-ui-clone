import React from "react";
import Detail from "./Detail";
import styled from "styled-components";
import TimeStamp from "./TimeStamp";

const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const ItemDetail = (props) => {
  const { timeStamp, ...remainingProps } = props;
  return (
    <DetailsSection>
      <Detail {...remainingProps} />
      <TimeStamp {...timeStamp} />
    </DetailsSection>
  );
};

export default ItemDetail;
