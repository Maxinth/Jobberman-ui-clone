import React from "react";
import { Container } from "./styled";
import GenerateAdCards from "../../EmployersPageComponents/Advertise/GenerateAdCards";
import { data } from "./data";

const HowMain = () => {
  return (
    <Container>
      <GenerateAdCards data={data} />
    </Container>
  );
};

export default HowMain;
