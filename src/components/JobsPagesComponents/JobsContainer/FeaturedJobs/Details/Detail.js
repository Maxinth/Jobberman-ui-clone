import React from "react";
import Contents from "./Contents";
import { LabelBox } from "../Label/styled";
import FeaturedLabel from "../Label";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  padding: 4rem 1rem 0rem;
  justify-content: space-between;

  position: relative;
  ${LabelBox} {
    width: 160px;
    transform: translate(-40px, -16px);
  }
`;

const Detail = (props) => {
  return (
    <Container>
      <FeaturedLabel />
      <Contents {...props} />
    </Container>
  );
};

export default Detail;
