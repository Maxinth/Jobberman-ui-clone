import React from "react";
import { Heading, SignUpContainer, Container } from "./styled";
import { data } from "./data";
import GenerateAdCards from "../EmployersPageComponents/Advertise/GenerateAdCards";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Heading>Create your Account</Heading>
      <Container>
        <GenerateAdCards data={data} withBtn={true} />
      </Container>
    </SignUpContainer>
  );
};

export default SignUpPage;
