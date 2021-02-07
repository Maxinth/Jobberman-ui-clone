import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputBox = styled.input`
  padding: 1rem;
  width: 100%;
  font-size: 0.9rem;
  font-family: "Open Sans", sans-serif;
  margin-top: 2rem;
  outline: none;
  border-radius: 5px;
  color: var(--color);
  border: 3px solid rgb(238, 238, 238);
`;
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
