import React from "react";
import { Box, Label, Input } from "./styled";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: 180px;
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
