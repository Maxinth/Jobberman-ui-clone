import React from "react";
import { Heading, Text } from "../FeaturedProduct/styled";
import styled from "styled-components";
import GenerateDetail from "./GenerateDetail";
import { topSection, finalSection } from "./data";

const Box = styled.div`
  > * {
    text-align: left;
  }
  ${Heading} {
    /* margin: unset; */
    margin: 1rem 0;
  }
  ${Text} {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const InnerBox = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const EndToEnd = () => {
  return (
    <Box>
      <Heading>End to End HR Solutions </Heading>
      <Text>
        Get tailored HR Solutions that match all your business needs.{" "}
      </Text>
      <InnerBox>
        <GenerateDetail data={topSection} />
      </InnerBox>
      <GenerateDetail data={finalSection} />
    </Box>
  );
};

export default EndToEnd;
