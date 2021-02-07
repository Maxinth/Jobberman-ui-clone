import React from "react";
import { InputBox } from "./styled";
import PropTypes from "prop-types";
import styled from "styled-components";
const InputContainer = styled.div`
  margin-bottom: 2rem;
  transition: margin 0.2;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    margin-bottom: unset;
  }
`;
const Inputs = ({ data }) => {
  return (
    <InputContainer>
      {data.map((item) => {
        const { type, placeholder } = item;
        return <InputBox type={type} placeholder={placeholder} />;
      })}
    </InputContainer>
  );
};

Inputs.propTypes = {
  data: PropTypes.array,
};
export default Inputs;
