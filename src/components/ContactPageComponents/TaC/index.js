import React from "react";
import { Mail, TacText } from "./styled";

const TermsAndCondition = () => {
  return (
    <TacText>
      By clicking "Send Message", you agree to our
      <Mail to="/">Terms & Conditions</Mail>
      and
      <Mail to="/">Privacy Policy</Mail>
    </TacText>
  );
};

export default TermsAndCondition;
