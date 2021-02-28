import React from "react";
import { Text, Span } from "./styled";

const DetailsTopSection = ({ company, location, jobType, salary }) => {
  return (
    <>
      <Text>{company}</Text>
      <Text>{location}</Text>
      <Text>{jobType}</Text>
      <Text>
        <Span bold>NGN</Span> {salary}
      </Text>
    </>
  );
};

export default DetailsTopSection;
