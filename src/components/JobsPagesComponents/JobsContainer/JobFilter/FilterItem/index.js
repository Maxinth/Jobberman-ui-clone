import React, { useState } from "react";
import ItemDetails from "./ItemDetails";
import { Container } from "./styled";
import ItemName from "./ItemName";

const FilterName = () => {
  const [selected, setIsSelected] = useState(false);
  const handleSelect = () => setIsSelected(!selected);

  return (
    <Container>
      <ItemName />
      {/* drop down select */}
      <ItemDetails selected={selected} handleSelect={handleSelect} />
    </Container>
  );
};

export default FilterName;
