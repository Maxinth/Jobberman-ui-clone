import React from "react";
import { Box, Span } from "./styled";
import ItemRadio from "./ItemRadio";
import PropTypes from "prop-types";

const ItemSubName = ({ selected, name }) => {
  return (
    <Box>
      <ItemRadio selected={selected} />
      <Span>{name}</Span>
    </Box>
  );
};

ItemSubName.propTypes = {
  selected: PropTypes.bool,
  name: PropTypes.string,
};
export default ItemSubName;
