import { TestimonialsContainer } from "./standOutElements";
import Testimonial from "./Testimonial";
import { getSlidePosition } from "../useSlider";
import PropTypes from "prop-types";
import React from "react";

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
