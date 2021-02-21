import React from "react";
import styled from "styled-components";
import FirstSection from "./FirstSection";
import SelectAndNumber from "./SelectAndNumber";
import ContactBox from "./ContactBox";

const Form = styled.form`
  margin-top: 1rem;
`;

const ContactForm = () => {
  return (
    <Form>
      <FirstSection />
      <SelectAndNumber />
      <ContactBox label="email" type="email" />
      <ContactBox label="message" type="comments" />
    </Form>
  );
};

export default ContactForm;
