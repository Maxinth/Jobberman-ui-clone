import React from "react";
import { InputBox } from "./styled";
import PropTypes from "prop-types";

const Inputs = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { type, placeholder } = item;
        return <InputBox type={type} placeholder={placeholder} />;
      })}
    </>
  );
};

Inputs.propTypes = {
  data: PropTypes.array,
};
export default Inputs;
