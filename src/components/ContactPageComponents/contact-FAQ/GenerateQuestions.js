import React from "react";
import { data } from "./data";
import QuestionItem from "./QuestionItem";

const GenerateQuestions = () => {
  return (
    <>
      {data.map((item, index) => (
        <QuestionItem key={index} {...item} />
      ))}
    </>
  );
};

export default GenerateQuestions;
