import { AdContainer, Heading } from "./styled";
import { data } from "./data";
import React from "react";
import GenerateAdCards from "./GenerateAdCards";

const Advertise = () => {
  return (
    <AdContainer>
      <Heading>Advertise with Jobberman</Heading>
      <GenerateAdCards data={data} />
    </AdContainer>
  );
};

export default Advertise;
