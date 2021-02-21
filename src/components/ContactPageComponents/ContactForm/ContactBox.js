import React from "react";
import { Box, Label, Input, TextArea } from "./styled";
import PropTypes from "prop-types";

const ContactBox = ({ label, type = "text" }) => {
  return (
    <Box>
      <Label htmlFor={label}>{label}</Label>
      {(type === "text" || type === "email") && (
        <Input type={type} id={label} />
      )}
      {type === "comments" && <TextArea />}
    </Box>
  );
};

ContactBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default ContactBox;

/*
the input box is rendered based on if the type is text or email

while the textarea is rendered when the type is comments

*/
