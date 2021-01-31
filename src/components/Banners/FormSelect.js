import React from "react";
import { SelectBoxItem, SelectBoxOption } from "./banner.elements";

const SelectBox = ({ items, currentChoice, onChange, id }) => {
  return (
    <SelectBoxItem
      name="jobFunction"
      id={id}
      value={currentChoice}
      onChange={onChange}
    >
      {items.map((item) => {
        const { itemName, itemValue } = item;

        return (
          <SelectBoxOption value={itemValue} key={itemValue}>
            {itemName}
          </SelectBoxOption>
        );
      })}
    </SelectBoxItem>
  );
};

export default SelectBox;
