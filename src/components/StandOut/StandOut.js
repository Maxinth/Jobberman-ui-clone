import { data } from "./data";
import Headings from "./Headings";
import HowToBlock from "./HowToBlock";
import { Container, HowTo } from "./standOutElements";
import TestimonialsSection from "./TestimonialsSection";
import React from "react";

const StandOut = () => {
  return (
    <Container>
      <Headings />

      <HowTo>
        <HowToBlock data={data} />
      </HowTo>

      <TestimonialsSection />
    </Container>
  );
};

export default StandOut;
