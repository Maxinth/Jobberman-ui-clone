import React, { useState } from "react";
import { WhySection, Title, WhyContainer } from "./styled";
import { data, matchAndMakeCurrent } from "./data";
import CircleControls from "../CircleControls";
import GenerateWhyBoxes from "./GenerateWhyBoxes";

const WhyJobberMan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { makeCurrentItem, matchCurrentItem } = matchAndMakeCurrent(
    currentIndex,
    setCurrentIndex
  );

  return (
    <WhySection>
      <Title>Why JobberMan</Title>
      <WhyContainer>
        <GenerateWhyBoxes
          data={data}
          currentIndex={currentIndex}
          matchCurrentItem={matchCurrentItem}
        />
      </WhyContainer>
      <CircleControls
        data={data}
        setIndex={makeCurrentItem}
        currentItem={matchCurrentItem}
      />
    </WhySection>
  );
};

export default WhyJobberMan;
