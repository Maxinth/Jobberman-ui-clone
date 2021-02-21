import React from "react";
import Tip from "./Tip";
import { TipContainer } from "./styled";

const GenerateTips = ({ data }) => {
  return (
    <TipContainer>
      {data.map((item, index) => (
        <Tip key={index} item={item} />
      ))}
    </TipContainer>
  );
};

export default GenerateTips;
