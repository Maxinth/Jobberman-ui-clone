import styled from "styled-components";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

// Inputs
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

// RadioButton
const RadioButtonUnchecked = styled(RadioButtonUncheckedIcon)``;
const Label = styled.label`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
const RadioButtonChecked = styled(RadioButtonCheckedIcon)``;
const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgb(78, 85, 89);
`;

// TopSection
const Title = styled.h5`
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  font-family: "Raleway", sans-serif;
  text-align: center;
`;
export {
  InputBox,
  RadioButtonUnchecked,
  RadioButtonChecked,
  Label,
  RadioButtonContainer,
  Title,
  Text,
};
