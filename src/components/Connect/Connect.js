import React from "react";
import useSliderAndGetCurrentValues from "../useSliderAndGetCurrentValues";
import { data } from "./data";
import { ConnectContainer, ConnectBox } from "./styled";
import ConnectTopSection from "./ConnectTopSection";
import ConnectBottomSection from "./ConnectBottomSection";

const Connect = () => {
  const {
    items,
    index,
    makeCurrentSlide,
    matchCurrentItem,
  } = useSliderAndGetCurrentValues(data, 5000);
  return (
    <ConnectContainer>
      <ConnectBox>
        <ConnectTopSection items={items} index={index} />
        <ConnectBottomSection
          items={items}
          makeCurrentSlide={makeCurrentSlide}
          matchCurrentItem={matchCurrentItem}
        />
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
