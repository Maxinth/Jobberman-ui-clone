import styled from "styled-components";
import { data } from "./data";
import { useState } from "react";
import Why from "./Why";
import CircleControls from "../CircleControls";
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
const WhyContainer = styled.section``;

// styled.``;
const WhyJobberMan = () => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <WhySection>
      <Heading>Why JobberMan</Heading>
      <WhyContainer>
        {data.map((item, index) => (
          <Why key={index} {...item} />
        ))}
        <CircleControls
          data={data}
          // setIndex={makeCurrentSlide}
          // currentItem={matchCurrentItem}
        />
      </WhyContainer>
    </WhySection>
  );
};

export default WhyJobberMan;
