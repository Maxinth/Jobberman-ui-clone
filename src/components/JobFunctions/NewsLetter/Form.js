import Inputs from "./Inputs";
import { inputs } from "./formData";
import RadioButtons from "./RadioButtons";
import CTA from "../../CTA";
import { Container, FormContainer } from "./styled";
import React from "react";

const Form = () => {
  return (
    <FormContainer>
      <Inputs data={inputs} />
      <Container>
        <RadioButtons />
        <CTA text="subscribe" goTo="/" />
      </Container>
    </FormContainer>
  );
};

export default Form;
