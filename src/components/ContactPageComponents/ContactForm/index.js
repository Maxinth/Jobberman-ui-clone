import React from "react";
import styled from "styled-components";
import FirstSection from "./FirstSection";
import SelectAndNumber from "./SelectAndNumber";

const Form = styled.form`
  margin-top: 1rem;
`;

const ContactForm = () => {
  return (
    <Form>
      <FirstSection />
      <SelectAndNumber />
    </Form>
  );
};

export default ContactForm;
