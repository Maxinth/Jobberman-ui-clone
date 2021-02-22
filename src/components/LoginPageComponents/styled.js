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
  padding: 0.5rem;
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
  background: #fff;

  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: unset;
  }

  @media (min-width: 1200px) {
    margin-bottom: -0.2rem;
  }
`;

const LoginBox = styled.div`
  max-width: 600px;
  padding: 0.5rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    margin-bottom: 1rem;
    margin-top: 7rem;
  }

  > ${Heading} + ${SpanText} {
    text-align: center;
  }

  @media (min-width: 900px) {
    margin-left: 4rem;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

// ButtonSection
const BtnContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  transition: margin-top 0.2s;
  ${Btn} {
    width: 100%;
  }

  @media (min-width: 900px) {
    margin-top: 0.2rem;
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
  @media (min-width: 900px) {
    margin-top: 1rem;
    > ${SpanText} {
      margin-bottom: 0.5rem;
    }
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

  & + ${SpanText} {
    cursor: pointer;
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
  Image,
};
