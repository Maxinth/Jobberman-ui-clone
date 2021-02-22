import React from "react";
import { inputs } from "./data";
import { Input } from "./styled";

const GenerateInputs = () => {
  return (
    <>
      {inputs.map(({ type, placeholder }) => (
        <Input type={type} placeholder={placeholder} key={type} />
      ))}
    </>
  );
};

export default GenerateInputs;
