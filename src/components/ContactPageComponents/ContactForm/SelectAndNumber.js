import React, { useState } from "react";
import { selectId, noItems } from "./data";
import SelectBox from "../../Banners/FormSelect";
import { Box, Label, Container } from "./styled";
import ContactBox from "./ContactBox";

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
