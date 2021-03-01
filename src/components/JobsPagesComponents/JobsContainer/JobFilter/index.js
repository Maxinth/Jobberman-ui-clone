import React from "react";
import HeaderMain from "../Header";
import styled from "styled-components";
import FormInputBox from "../../../Navbar/NavSideBar/NavSideBarForm";
import FilterName from "./FilterItem";
import { Container } from "../JobCount/styled";

const FilterContainer = styled(Container)`
  margin-top: 1rem;
  color: rgb(78, 85, 89);
  display: none;
  background-color: #fff;
  @media (min-width: 1140px) {
    display: block;
    width: 35%;
    margin-left: 1rem;
  }
`;

const Box = styled.div`
  form {
    border: 1px solid rgb(231, 228, 228);
  }
`;
const JobsFilter = () => {
  return (
    <FilterContainer>
      <HeaderMain text="Filter Results" el="h2" />
      <Box>
        <FormInputBox />
        <FilterName />
      </Box>
    </FilterContainer>
  );
};

export default JobsFilter;
