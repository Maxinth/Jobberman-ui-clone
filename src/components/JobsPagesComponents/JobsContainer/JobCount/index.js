import React from "react";
import HeaderMain from "../Header";
import { Container } from "./styled";
import CountAndBtn from "./CountAndBtn";

const JobCount = () => {
  return (
    <Container>
      <HeaderMain text="Jobs in Nigeria" el="h1" />
      <CountAndBtn />
    </Container>
  );
};

export default JobCount;
