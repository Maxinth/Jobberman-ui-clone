import React from "react";
import { JobBox } from "../../../JobCount/styled";
import HeaderMain from "../Header";
import styled from "styled-components";
import CountAndBtn from "./CountAndBtn";

const Container = styled(JobBox)`
  padding: unset;
  display: block;
  width: 100%;
  margin: unset;
  max-width: unset;
`;
const JobCount = () => {
  return (
    <Container>
      <HeaderMain text="Jobs In Nigeria" el="h1" />
      <CountAndBtn />
    </Container>
  );
};

export default JobCount;
