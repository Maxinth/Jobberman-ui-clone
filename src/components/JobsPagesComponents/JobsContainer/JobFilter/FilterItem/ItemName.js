import React, { useState } from "react";
import { Box, DropIcon, Span } from "./styled";

const ItemName = ({ name, toggleDetails }) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClick = () => setIsClicked(!isClicked);

  const handleClick = () => {
    toggleClick();
    toggleDetails();
  };

  return (
    <Box onClick={handleClick} dropDownState={isClicked}>
      <Span>{name}</Span>
      <DropIcon />
    </Box>
  );
};

export default ItemName;
