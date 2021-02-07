import React from "react";
import { NewsLetterContainer } from "./styled";
import Form from "./Form";
import TopSection from "./TopSection";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <TopSection />
      <Form />
    </NewsLetterContainer>
  );
};

export default NewsLetter;
