import { data } from "./data";
import Headings from "./Headings";
import HowToBlock from "./HowToBlock";
import { Container, HowTo } from "./standOutElements";
import styled from "styled-components";
import { data as testimonials } from "./testimonialData";
import Testimonial from "./Testimonial";
import useSlider, { getSlidePosition } from "../useSlider";

const Testimonials = styled.section`
  margin-top: 1rem;
  /* overflow: hidden; */
`;

const TestimonialsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 900px;

  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  max-width: 900px;
  min-height: 1000px;
  z-index: 10;
  padding: 2rem;
  transition: min-height 0.3s;
  box-shadow: 1px 1px 9px grey;
  width: 100%;

  @media (min-width: 500px) {
    min-height: 900px;
  }
  @media (min-width: 700px) {
    min-height: 550px;
  }
`;

// styled.div``;
const StandOut = () => {
  const { items, index, setIndex } = useSlider(testimonials);
  return (
    <Container>
      <Headings />
      <HowTo>
        <HowToBlock data={data} />
      </HowTo>

      {/* move to its own component */}
      <Testimonials>
        <TestimonialsContainer>
          {items.map((item, itemIndex) => {
            let slidePosition = getSlidePosition(index, itemIndex, items);
            return (
              <Testimonial
                key={item.name}
                {...item}
                slidePosition={slidePosition}
              />
            );
          })}
        </TestimonialsContainer>
      </Testimonials>
    </Container>
  );
};

export default StandOut;
