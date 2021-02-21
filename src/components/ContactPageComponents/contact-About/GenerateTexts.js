import React from "react";
import { Text } from "./styled";
import { data } from "./data";

const GenerateTexts = () => {
  return (
    <>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </>
  );
};

export default GenerateTexts;
