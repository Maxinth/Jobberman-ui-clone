import React from "react";
import { loginImages } from "./data";
import { ImagesContainer, ImageItem } from "./styled";
import useSliderAndGetCurrentValues, {
  itemPosition,
} from "../useSliderAndGetCurrentValues";

const ImagesMain = () => {
  const { items, index } = useSliderAndGetCurrentValues(loginImages);

  return (
    <ImagesContainer>
      {items.map((item, itemIndex) => (
        <ImageItem
          src={item}
          alt="login"
          key={itemIndex}
          position={itemPosition(index, itemIndex, items)}
        />
      ))}
    </ImagesContainer>
  );
};

export default ImagesMain;
