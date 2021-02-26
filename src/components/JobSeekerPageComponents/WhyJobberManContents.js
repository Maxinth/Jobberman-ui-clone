import React from "react";
import { data, matchAndMakeCurrent } from "./data";
import CircleControls from "../CircleControls";
import useSliderAndGetCurrentValues, {
  itemPosition,
} from "../useSliderAndGetCurrentValues";
import WhyBoxes from "./WhyBoxes";

const WhyJobberManContents = () => {
  const { items, index, makeCurrentSlide } = useSliderAndGetCurrentValues(data);
  const { matchCurrentItem } = matchAndMakeCurrent(index, makeCurrentSlide);
  return (
    <>
      <WhyBoxes
        items={items}
        index={index}
        matchCurrentItem={matchCurrentItem}
        itemPosition={itemPosition}
      />
      <CircleControls
        data={items}
        setIndex={makeCurrentSlide}
        currentItem={matchCurrentItem}
      />
    </>
  );
};

export default WhyJobberManContents;
