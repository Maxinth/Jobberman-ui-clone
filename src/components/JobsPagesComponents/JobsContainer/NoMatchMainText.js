import React from "react";
import { NoMatchText, Span } from "./styled";

const NoMatchMainText = () => {
  return (
    <NoMatchText>
      <Span bold>No Jobs</Span>
      <Span red>on this page</Span> match those parameters!
    </NoMatchText>
  );
};

export default NoMatchMainText;
