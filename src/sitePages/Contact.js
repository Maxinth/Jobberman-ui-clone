import React from "react";
import ContactPage from "../components/ContactPageComponents";
import TransitionBox from "./TransitionBox";
import useTitle from "../components/useTitle";

const Contact = () => {
  useTitle("About Us - Who We Are & How to Contact Us");
  return (
    <TransitionBox>
      <ContactPage />
    </TransitionBox>
  );
};

export default Contact;
