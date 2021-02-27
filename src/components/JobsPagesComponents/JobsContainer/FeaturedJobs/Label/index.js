import React from "react";
import { Box, Span, LabelBox, Icon } from "./styled";

const FeaturedLabel = () => {
  return (
    <LabelBox>
      <Box>
        <Icon />
        <Span> featured</Span>
      </Box>
    </LabelBox>
  );
};

export default FeaturedLabel;
