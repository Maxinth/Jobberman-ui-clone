import styled from "styled-components";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

// Inputs
const InputBox = styled.input`
  padding: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
  font-family: "Open Sans", sans-serif;
  margin-top: 2rem;
  outline: none;
  border-radius: 5px;
  color: var(--color);
  border: 3px solid rgb(238, 238, 238);
  transition: padding 0.2;

  @media (min-width: 500px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
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
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 400px) {
    flex-direction: row;
    margin-bottom: unset;
  }
`;

// TopSection
const Title = styled.h5`
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-align: center;
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
  Container,
};
