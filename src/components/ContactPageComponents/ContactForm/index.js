import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 1rem;
`;
const Box = styled.div`
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;
const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: rgb(78, 85, 89);
`;
const Input = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(238, 238, 238);
`;

const ContactForm = () => {
  return (
    <Form>
      <Box>
        <Label htmlFor="name">Name</Label>
        <Input type="input" />
      </Box>
    </Form>
  );
};

export default ContactForm;
