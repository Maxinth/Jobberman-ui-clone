import React from "react";
import ContactPage from "../components/ContactPageComponents";
import TransitionBox from "./TransitionBox";

const Contact = () => {
  return (
    <TransitionBox>
      <ContactPage />
    </TransitionBox>
  );
};

export default Contact;
