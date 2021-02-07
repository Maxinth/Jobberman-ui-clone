import styled from "styled-components";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { JobBox } from "../../JobCount/styled";
// NewsLetter
const NewsLetterContainer = styled(JobBox)`
  margin-top: 3rem;
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  --color: rgb(78, 85, 89);
  padding: 2rem 1rem;
  button {
    background-color: #333;
    width: 100%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 0.5rem 2rem 2rem;
    > * {
      width: 30%;
    }
  }
`;

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

const Container = styled.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

// RadioButtons

const RadioContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1rem;
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

const TopSectionContainer = styled(Container)`
  color: rgb(78, 85, 89);

  @media (min-width: 900px) {
    /* width: unset; */
    text-align: left;
    > * {
      text-align: inherit !important;
      color: inherit;
    }
  }
`;
// Form
const FormContainer = styled.form`
  padding: 1rem 2rem;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
      flex: 1;
    }
    /* width: 0%; */

    ${Container} {
      margin-top: 3.5rem;
    }
  }
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
  RadioContainer,
  NewsLetterContainer,
  FormContainer,
  InputContainer,
  TopSectionContainer,
};
