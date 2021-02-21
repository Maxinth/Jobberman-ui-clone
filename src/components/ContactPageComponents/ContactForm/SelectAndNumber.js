import React, { useState } from "react";
import { selectId, noItems } from "./data";
import SelectBox from "../../Banners/FormSelect";
import { SelectBoxItem } from "../../Banners/banner.elements";
import { Section, Box, Label } from "./styled";
import ContactBox from "./ContactBox";
import styled from "styled-components";

const Container = styled(Section)`
  ${Box} {
    ${SelectBoxItem} {
      border: 1px solid rgb(238, 238, 238);
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    > * {
      /* flex: 1; */
    }
    ${Box} {
      /* margin-right: 2rem; */
      :first-child {
        margin-right: 1rem;
      }
      text-align: center;
      ${SelectBoxItem} {
        width: 100%;
      }
    }
  }
`;
const SelectAndNumber = () => {
  const [choice, setChoice] = useState(noItems[0].itemName);
  const onChange = (e) => {
    setChoice(e.target.value);
  };
  return (
    <Container>
      <Box>
        <Label htmlFor={selectId}>Mobile Number Country</Label>
        <SelectBox
          items={noItems}
          currentChoice={choice}
          onChange={onChange}
          id={selectId}
        />
      </Box>
      <ContactBox label="Mobile Number" />
    </Container>
  );
};

export default SelectAndNumber;
