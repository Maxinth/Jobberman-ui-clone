import useSlider, { getSlidePosition } from "./useSlider";

const useSliderAndGetCurrentValues = (data, interval = 4000) => {
  const { items, index, setIndex } = useSlider(data, interval);

  // custom function to set current index
  const makeCurrentSlide = (itemIndex) => setIndex(itemIndex);

  // custom function to style control box
  const matchCurrentItem = (itemIndex) =>
    itemIndex === index ? "current" : "";

  return { items, index, makeCurrentSlide, matchCurrentItem };
};

/* custom function to get the slidePosition  
do well to pass in the arguments AS USED in the signature.
*/

export const itemPosition = (index, itemIndex, items) => {
  return getSlidePosition(index, itemIndex, items);
};

export default useSliderAndGetCurrentValues;
