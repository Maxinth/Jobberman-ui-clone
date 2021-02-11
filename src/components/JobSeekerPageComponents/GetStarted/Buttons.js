import React from "react";
import { BtnContainer } from "./styled";
import CTA from "../../CTA";

const Buttons = () => {
  return (
    <BtnContainer>
      <CTA text="create your account" goTo="/sign-up" />
      <CTA text="explore jobs" goTo="/jobs" />
    </BtnContainer>
  );
};

export default Buttons;
