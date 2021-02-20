import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: rgb(78, 85, 89);
  text-transform: capitalize;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(238, 238, 238);
  outline: none;
`;

const Section = styled.section``;

export { Box, Label, Input, Section };
