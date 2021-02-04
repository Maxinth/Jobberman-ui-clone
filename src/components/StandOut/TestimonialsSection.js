import TestimonialItems from "./TestimonialItems";
import CircleControls from "../../components/CircleControls";
import useSliderAndGetCurrentValues from "../useSliderAndGetCurrentValues";
import { data as testimonials } from "./testimonialData";
import { Testimonials } from "./standOutElements";

const TestimonialsSection = () => {
  const {
    items,
    index,
    makeCurrentSlide,
    matchCurrentItem,
  } = useSliderAndGetCurrentValues(testimonials);

  return (
    <Testimonials>
      <TestimonialItems items={items} index={index} />
      <CircleControls
        data={testimonials}
        setIndex={makeCurrentSlide}
        currentItem={matchCurrentItem}
      />
    </Testimonials>
  );
};

export default TestimonialsSection;
