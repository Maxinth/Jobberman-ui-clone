import React from "react";
import {
  SelectBoxItem,
  SelectBoxOption,
  SelectBoxContainer,
  SearchButton,
  SearchText,
} from "./banner.elements";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

const SelectBox = ({ items, currentChoice, onChange, id, handleSubmit }) => {
  return (
    <SelectBoxContainer twoItems={id === "locations"}>
      <SelectBoxItem
        name="jobFunction"
        id={id}
        value={currentChoice}
        onChange={onChange}
      >
        {items.map((item, index) => {
          const { itemName, itemValue } = item;

          return (
            <SelectBoxOption value={itemValue} key={`${index}${itemValue}`}>
              {itemName}
            </SelectBoxOption>
          );
        })}
      </SelectBoxItem>

      {/* render only when the id is === 'locations' */}
      {id === "locations" && (
        <SearchButton onClick={handleSubmit}>
          <SearchIcon />
          <SearchText>Search</SearchText>
        </SearchButton>
      )}
    </SelectBoxContainer>
  );
};

SelectBox.propTypes = {
  items: PropTypes.array,
  currentChoice: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default SelectBox;
