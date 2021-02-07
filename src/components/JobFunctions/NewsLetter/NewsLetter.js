import React from "react";
import { JobBox } from "../../JobCount/styled";
import styled from "styled-components";
import Inputs from "./Inputs";
import { inputs } from "./formData";
import RadioButtons from "./RadioButtons";
import TopSection from "./TopSection";
import CTA from "../../CTA";
const NewsLetterContainer = styled(JobBox)`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  --color: rgb(78, 85, 89);
  padding: 2rem 2rem;
  button {
    background-color: #333;
    width: 100%;
  }
`;

const Container = styled.div``;

const Form = styled.form`
  width: 100%;
`;
// styled.``;
const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <TopSection />
      <Form>
        <Inputs data={inputs} />
        <Container>
          <RadioButtons />
          <CTA text="subscribe" goTo="/" />
        </Container>
      </Form>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
