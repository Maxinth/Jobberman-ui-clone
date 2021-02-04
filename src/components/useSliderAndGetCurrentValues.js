import useSlider from "./useSlider";

const useSliderAndGetCurrentValues = (data, interval = 4000) => {
  const { items, index, setIndex } = useSlider(data, interval);

  // custom function to set current index
  const makeCurrentSlide = (itemIndex) => setIndex(itemIndex);

  // custom function to style control box
  const matchCurrentItem = (itemIndex) =>
    itemIndex === index ? "current" : "";

  return { items, index, makeCurrentSlide, matchCurrentItem };
};

export default useSliderAndGetCurrentValues;
