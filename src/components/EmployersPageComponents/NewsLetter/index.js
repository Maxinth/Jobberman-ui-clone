import React from "react";
import { JobSeekerContainer as NLContainer } from "../../JobSeekerPageComponents/styled";
import NewsLetter from "../../JobFunctions/NewsLetter/NewsLetter";

const NewsLetterSection = () => {
  return (
    <NLContainer>
      <NewsLetter />
    </NLContainer>
  );
};

export default NewsLetterSection;
