import React from "react";
import { SelectBoxItem, SelectBoxOption } from "./banner.elements";
import PropTypes from "prop-types";

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

SelectBox.propTypes = {
  items: PropTypes.array,
  currentChoice: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};


export default SelectBox;
