import styled from "styled-components";

const SpanText = styled.span`
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgb(226, 232, 240);
  outline: none;
  font-family: "Open Sans", sans-serif;
  border-radius: 5px;
  color: #333;
  background-color: rgb(238, 238, 238);
  transition: background-color 0.2;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  :focus {
    background-color: #fff;
  }
`;
export { SpanText, Input };
