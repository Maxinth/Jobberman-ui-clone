import React from "react";
import { Box, Span } from "./styled";
import ItemRadio from "./ItemRadio";

const ItemSubName = ({ selected }) => {
  return (
    <Box>
      <ItemRadio selected={selected} />
      <Span>Accounting, Auditing & Finance</Span>
    </Box>
  );
};

export default ItemSubName;
