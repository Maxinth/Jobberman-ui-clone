import React from "react";
import styled from "styled-components";
import FirstSection from "./FirstSection";
import SelectAndNumber from "./SelectAndNumber";
import FinalSection from "./FinalSection";

const Form = styled.form`
  margin-top: 1rem;
`;

const ContactForm = () => {
  return (
    <Form>
      <FirstSection />
      <SelectAndNumber />
      <FinalSection />
    </Form>
  );
};

export default ContactForm;
