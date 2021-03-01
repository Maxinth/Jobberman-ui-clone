import React from "react";
import { Container } from "./styled";
import {data} from './data'
import GenerateFilterItem from "./GenerateFilterItem";

const FilterName = () => {
  return (
    <Container>
          <GenerateFilterItem data={data}/>
    </Container>
  );
};

export default FilterName;
