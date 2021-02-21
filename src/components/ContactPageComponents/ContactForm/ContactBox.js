import React from "react";
import { Box, Label, Input } from "./styled";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 180px;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(238, 238, 238);
  outline: none;
`;
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
