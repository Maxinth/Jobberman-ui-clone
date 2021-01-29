import React from "react";

const SelectBox = ({ items, currentChoice, onChange, id }) => {
  return (
    <select
      name="jobFunction"
      id={id}
      className="mainBanner__select"
      value={currentChoice}
      onChange={onChange}
    >
      {items.map((item, index) => {
        const { itemName, itemValue } = item;

        return (
          <option
            className="mainBanner__options"
            value={itemValue}
            key={itemValue}
          >
            {itemName}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBox;
