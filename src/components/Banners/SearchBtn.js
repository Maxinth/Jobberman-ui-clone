import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { SearchButton, SearchText } from "./banner.elements";
import PropTypes from "prop-types";

const SearchBtn = ({ handleSubmit }) => {
  return (
    <SearchButton onClick={handleSubmit}>
      <SearchIcon />
      <SearchText>Search</SearchText>
    </SearchButton>
  );
};

SearchBtn.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchBtn;
