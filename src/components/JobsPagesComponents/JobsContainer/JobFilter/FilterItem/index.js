import React from "react";
import { Container } from "./styled";
import { data } from "./data";
import GenerateFilterItem from "./GenerateFilterItem";
import ResetButton from "./ResetButton";

const FilterName = () => {
  return (
    <Container>
      <GenerateFilterItem data={data} />
      <ResetButton />
    </Container>
  );
};

export default FilterName;
