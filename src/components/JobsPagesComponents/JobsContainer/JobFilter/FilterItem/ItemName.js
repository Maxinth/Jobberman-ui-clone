import React, { useState } from "react";
import { Box, DropIcon, Span } from "./styled";

const ItemName = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClick = () => setIsClicked(!isClicked);

  return (
    <Box onClick={toggleClick} dropDownState={isClicked}>
      <Span>{name}</Span>
      <DropIcon />
    </Box>
  );
};

export default ItemName;
