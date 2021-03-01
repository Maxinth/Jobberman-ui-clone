import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const Container = styled.section`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* padding: 1rem 1.5rem; */
`;
const Span = styled.span``;
const DropIcon = styled(ArrowDropDownIcon)``;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const FilterName = () => {
  return (
    <Container>
      <Box>
        <Span>JobFunction</Span>
        <DropIcon />
      </Box>
    </Container>
  );
};

export default FilterName;
