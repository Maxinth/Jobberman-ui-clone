import styled from "styled-components";
import Testimonial from "./Testimonial";
import { getSlidePosition } from "../useSlider";
import PropTypes from "prop-types";

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
const TestimonialItems = ({ items, index }) => {
  return (
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
  );
};

TestimonialItems.propTypes = {
  items: PropTypes.array,
  index: PropTypes.number,
};

export default TestimonialItems;
