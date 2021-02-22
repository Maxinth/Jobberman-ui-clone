import React from "react";
import styled, { css } from "styled-components";
import { loginImages } from "./data";
import { Image } from "./styled";
import useSliderAndGetCurrentValues, {
  itemPosition,
} from "../useSliderAndGetCurrentValues";

const ImageItem = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
    `}
  ${(props) =>
    props.position === "lastSlide" &&
    css`
      opacity: 0;
    `}

        
${(props) =>
    props.position === "nextSlide" &&
    css`
      opacity: 0;
    `}
`;

const ImagesContainer = styled.section`
  display: none;
  width: 100%;
  height: 100vh;

  @media (min-width: 900px) {
    display: block;
    position: relative;
  }
`;
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
