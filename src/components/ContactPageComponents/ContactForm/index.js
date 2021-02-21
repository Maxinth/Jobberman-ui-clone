import React from "react";
import { Form } from "./styled";
import FirstSection from "./FirstSection";
import SelectAndNumber from "./SelectAndNumber";
import FinalSection from "./FinalSection";
import CTA from "../../CTA";

const ContactForm = () => {
  return (
    <Form>
      <FirstSection />
      <SelectAndNumber />
      <FinalSection />
      <CTA text="send message" goTo="/" />
    </Form>
  );
};

export default ContactForm;
