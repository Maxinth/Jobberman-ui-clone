import React from "react";
import { InputBox } from "./styled";
import PropTypes from "prop-types";
import { InputContainer } from "./styled";

const Inputs = ({ data }) => {
  return (
    <InputContainer>
      {data.map((item) => {
        const { type, placeholder } = item;
        return <InputBox type={type} placeholder={placeholder} key={type} />;
      })}
    </InputContainer>
  );
};

Inputs.propTypes = {
  data: PropTypes.array,
};
export default Inputs;
