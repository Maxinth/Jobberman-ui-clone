import styled from "styled-components";
import { Btn } from "../../StandOut/standOutElements";
import { SelectBoxItem } from "../../Banners/banner.elements";

// ContactBox
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

const TextArea = styled.textarea`
  height: 180px;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(238, 238, 238);
  outline: none;
`;

const Section = styled.section``;

// index.js
const Form = styled.form`
  margin-top: 1rem;
  ${Btn} {
    margin-top: 2rem;
  }
`;

// SelectAndNumber
const Container = styled(Section)`
  ${Box} {
    ${SelectBoxItem} {
      border: 1px solid rgb(238, 238, 238);
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    > * {
      /* flex: 1; */
    }
    ${Box} {
      /* margin-right: 2rem; */
      :first-child {
        margin-right: 1rem;
      }
      text-align: center;
      ${SelectBoxItem} {
        width: 100%;
      }
    }
  }
`;

export { Box, Label, Input, Section, TextArea, Form, Container };
