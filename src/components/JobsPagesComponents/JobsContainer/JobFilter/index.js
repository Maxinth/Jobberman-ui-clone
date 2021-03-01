import React from "react";
import HeaderMain from "../Header";
import { Box, FilterContainer } from "./styled";
import FormInputBox from "../../../Navbar/NavSideBar/NavSideBarForm";
import FilterName from "./FilterItem";

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
