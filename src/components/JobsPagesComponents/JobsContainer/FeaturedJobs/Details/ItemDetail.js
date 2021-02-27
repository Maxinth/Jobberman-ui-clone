import React from "react";
import Detail from "./Detail";
import { DetailsSection } from "./styled";
import TimeStamp from "./TimeStamp";

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

/* timeStamps object property is destructured in line 7 and it is spread in line 11 */
