import React from "react";
import GenerateSocialIcons from "../Footer/FooterSocialIcons";
import { iconsData } from "./data";
import styled from "styled-components";
import { IconContainer } from "../Footer/styled";

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

const LoginViaSocial = () => {
  return (
    <IconsBox>
      <GenerateSocialIcons data={iconsData} />
    </IconsBox>
  );
};

export default LoginViaSocial;
