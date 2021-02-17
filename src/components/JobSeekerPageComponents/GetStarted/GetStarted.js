import Buttons from "./Buttons";
import { StartedContainer, JobBox } from "./styled";
import HeaderSection from "./HeaderSection";
import React from "react";


const GetStarted = () => {
  return (
    <StartedContainer>
      <JobBox>
        <HeaderSection />
        <Buttons />
      </JobBox>
    </StartedContainer>
  );
};

export default GetStarted;
