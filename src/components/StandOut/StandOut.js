import { data } from "./data";
import Headings from "./Headings";
import HowToBlock from "./HowToBlock";
import { Container, HowTo } from "./standOutElements";
import styled from "styled-components";
import { data as testimonials } from "./testimonialData";
import Testimonial from "./Testimonial";

const Testimonials = styled.section`
  margin-top: 1rem;
`;

// styled.div``;
const StandOut = () => {
  return (
    <Container>
      <Headings />
      <HowTo>
        <HowToBlock data={data} />
      </HowTo>

      {/* move to its own component */}
      <Testimonials>
        {testimonials.map((item) => (
          <Testimonial key={item.name} {...item} />
        ))}
      </Testimonials>
    </Container>
  );
};

export default StandOut;
