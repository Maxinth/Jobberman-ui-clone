import React from "react";
import { JobBox } from "../../JobCount/styled";
import styled from "styled-components";
import Inputs from "./Inputs";
import { inputs } from "./formData";
import RadioButtons from "./RadioButtons";
import TopSection from "./TopSection";
import CTA from "../../CTA";
import { Container } from "./styled";
const NewsLetterContainer = styled(JobBox)`
  margin-top: 3rem;
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  --color: rgb(78, 85, 89);
  padding: 2rem 1rem;
  button {
    background-color: #333;
    width: 100%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 0.5rem 2rem 2rem;
    > * {
      width: 50%;
    }
  }
`;

const Form = styled.form`
  padding: 1rem 2rem;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
      flex: 1;
    }
    /* width: 0%; */

    ${Container} {
      margin-top: 3.5rem;
    }
  }
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
