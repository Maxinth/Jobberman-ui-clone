import TestimonialItems from "./TestimonialItems";
import CircleControls from "./CircleControls";
import useSlider from "../useSlider";
import { data as testimonials } from "./testimonialData";
import { data } from "./data";
import { Testimonials } from "./standOutElements";

const TestimonialsSection = () => {
  const { items, index, setIndex } = useSlider(testimonials);
  const makeCurrentSlide = (itemIndex) => setIndex(itemIndex);
  const matchCurrentItem = (itemIndex) =>
    itemIndex === index ? "current" : "";

  return (
    <Testimonials>
      <TestimonialItems items={items} index={index} />
      <CircleControls
        data={data}
        setIndex={makeCurrentSlide}
        currentItem={matchCurrentItem}
      />
    </Testimonials>
  );
};

export default TestimonialsSection;
