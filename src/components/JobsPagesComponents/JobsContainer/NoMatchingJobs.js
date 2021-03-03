import React from "react";
import { NoMatchContainer } from "./styled";
import NoMatchMainText from "./NoMatchMainText";
import BackToInitialView from "./BackToInitialView";

const NoMatchingJobs = () => {
  return (
    <NoMatchContainer>
      <NoMatchMainText />
      <BackToInitialView />
    </NoMatchContainer>
  );
};

export default NoMatchingJobs;
