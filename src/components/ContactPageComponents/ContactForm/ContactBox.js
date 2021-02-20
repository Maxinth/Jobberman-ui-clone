import React from "react";
import { Box, Label, Input } from "./styled";
import PropTypes from "prop-types";

const ContactBox = ({ label, type = "text" }) => {
  return (
    <Box>
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} id={label} />
    </Box>
  );
};

ContactBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default ContactBox;
