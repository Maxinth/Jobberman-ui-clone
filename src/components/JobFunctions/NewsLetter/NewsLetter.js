import React from "react";
import { JobBox } from "../../JobCount/styled";
import styled from "styled-components";
import Inputs from "./Inputs";
import { inputs } from "./formData";
import RadioButtons from "./RadioButtons";
const NewsLetterContainer = styled(JobBox)`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  --color: rgb(78, 85, 89);

  padding: 2rem 2rem;
`;

const Title = styled.h5`
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  font-family: "Lato", sans-serif;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
`;
// styled.``;
const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <Title>Stay Updated !</Title>
      <Text>
        Join our newsletter and get the latest job listings and career insights
        delivered straight to your inbox.
      </Text>
      <Form>
        <Inputs data={inputs} />
        <RadioButtons />
      </Form>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
