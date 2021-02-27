import React from "react";
import FeaturedLabel from "../Label";
import styled from "styled-components";
import Contents from "./Contents";
import { LabelBox } from "../Label/styled";
import TimeStamp from "./TimeStamp";

const Container = styled.section`
  display: flex;
  padding: 4rem 1rem 0rem;
  justify-content: space-between;
  /* border: 1px solid red; */
  position: relative;
  ${LabelBox} {
    /* position: absolute;
    top: 0;
    left: 10px; */
    /* flex: 1; */
    width: 160px;
    transform: translate(-40px, -16px);
  }
`;

const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Details = () => {
  return (
    <DetailsSection>
      <Container>
        <FeaturedLabel />
        <Contents />
      </Container>
      <TimeStamp />
    </DetailsSection>
  );
};

export default Details;
