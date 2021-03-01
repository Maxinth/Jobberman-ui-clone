import React, { useState } from "react";
import { Box, DropIcon, Span } from "./styled";

const ItemName = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClick = () => setIsClicked(!isClicked);

  return (
    <Box onClick={toggleClick} dropDownState={isClicked}>
      <Span>JobFunction</Span>
      <DropIcon />
    </Box>
  );
};

export default ItemName;
