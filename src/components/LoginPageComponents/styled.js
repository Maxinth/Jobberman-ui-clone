import styled, { css } from "styled-components";
import { Heading } from "../ContactPageComponents/styled";
import { Btn } from "../StandOut/standOutElements";
import { IconContainer } from "../Footer/styled";

const SpanText = styled.span`
  color: ${({ colored }) => (colored ? "rgb(255, 98, 0)" : " rgb(78, 85, 89)")};
  font-size: 0.9rem;

  /* when lg prop is passed in */
  ${({ lg }) =>
    lg &&
    css`
      font-size: 1rem;
      font-weight: 600;
    `}
  /* when lg prop is passed in */

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
  font-size: calc(clamp(0.5rem, 0.9rem, 1rem));
  margin-bottom: 0.5rem;
  :focus {
    background-color: #fff;
  }
`;

// index
const Container = styled.section`
  margin: 5rem 1rem 4rem;
  background: #fff;
  padding: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
`;

const LoginBox = styled.div`
  max-width: 600px;
  border: 1px solid black;
  padding: 0.5rem 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    margin-bottom: 1rem;
  }

  > ${Heading} + ${SpanText} {
    text-align: center;
  }
`;

// ButtonSection
const BtnContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  ${Btn} {
    width: 100%;
  }
`;

const BtnBox = styled.div`
  margin-top: 3rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > ${SpanText} {
    margin-bottom: 1rem;
  }
`;

// ContinueBlock
const BlockContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HrBreak = styled.hr`
  height: 1px;
  color: rgb(226, 232, 240);
  margin: 0 0.5rem;
  flex: 1;
`;

// LoginCheck
const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 500px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: margin-bottom 0.2;
  > ${Input} {
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    width: unset;
  }

  @media (min-width: 500px) {
    margin-bottom: unset;
  }
`;

// LoginForm
const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
`;

// LoginViaSocial
const IconsBox = styled.div`
  margin: 2rem 0;
  ${IconContainer} {
    border-radius: 4px;
    border: 1px solid rgb(226, 232, 240);
    transition: all 0.2;
    padding: 2rem;
    margin-right: 0.5rem;
    @media (max-width: 320px) {
      background: transparent;
      width: 30px;
      height: 30px;
      padding: 1rem;
    }
    @media (min-width: 600px) {
      width: 130px;
      height: 70px;
    }
    cursor: pointer;
    > svg {
      font-size: 3rem;
      padding: 0.5rem;
    }
  }
`;

export {
  SpanText,
  Input,
  Container,
  LoginBox,
  Heading,
  BtnContainer,
  BtnBox,
  BlockContainer,
  HrBreak,
  Box,
  CheckContainer,
  Form,
  IconsBox,
};
