import React from "react";
import { Box, Span } from "./styled";
import ItemRadio from "./ItemRadio";

const ItemSubName = ({ selected, name }) => {
  return (
    <Box>
      <ItemRadio selected={selected} />
      <Span>{name}</Span>
    </Box>
  );
};

export default ItemSubName;
