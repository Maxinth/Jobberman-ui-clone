import { data } from "./data";
import Headings from "./Headings";
import HowToBlock from "./HowToBlock";
import { Container, HowTo } from "./standOutElements";
import styled from "styled-components";
import { data as testimonials } from "./testimonialData";

import useSlider from "../useSlider";
import TestimonialItems from "./TestimonialItems";
import CircleControls from "./CircleControls";

const Testimonials = styled.section`
  margin: 4rem 0 0.5rem;
  background-color: rgb(226, 232, 240);
`;

// styled.div``;
const StandOut = () => {
  const { items, index, setIndex } = useSlider(testimonials);
  const makeCurrentSlide = (itemIndex) => setIndex(itemIndex);
  const matchCurrentItem = (itemIndex) =>
    itemIndex === index ? "current" : "";
  return (
    <Container>
      <Headings />
      <HowTo>
        <HowToBlock data={data} />
      </HowTo>

      <Testimonials>
        <TestimonialItems items={items} index={index} />
        <CircleControls
          data={data}
          setIndex={makeCurrentSlide}
          currentItem={matchCurrentItem}
        />
      </Testimonials>
    </Container>
  );
};

export default StandOut;
