import styled from "styled-components";
import { data, matchAndMakeCurrent } from "./data";
import { useState } from "react";
import CircleControls from "../CircleControls";
import GenerateWhyBoxes from "./GenerateWhyBoxes";

const WhySection = styled.section`
  padding: 1rem 2rem;
  background: #fff;
  margin: 3rem 0;
  > h3 {
    margin-top: unset;
    margin-bottom: 1rem;
  }
`;
const Heading = styled.h3`
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-size: calc(1rem + 2vw);
  font-weight: 700;
`;
const WhyContainer = styled.section`
  display: flex;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: calc(35rem + 5vw);
  transition: margin-bottom 0.2s;
  @media (min-width: 500px) {
    margin-bottom: calc(35rem + 25vw);
  }
  @media (min-width: 800px) {
    margin-bottom: calc(35rem + 35vw);
  }
  @media (min-width: 960px) {
    /* min-height: 550px; */
    /* max-height: 400px; */
    margin-bottom: calc(15rem + 30vw);
  }
  @media (min-width: 1200px) {
    /* max-height: 400px; */
    margin-bottom: calc(30rem + 5vw);
  }
`;

// styled.``;
const WhyJobberMan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { makeCurrentItem, matchCurrentItem } = matchAndMakeCurrent(
    currentIndex,
    setCurrentIndex
  );

  return (
    <WhySection>
      <Heading>Why JobberMan</Heading>
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
