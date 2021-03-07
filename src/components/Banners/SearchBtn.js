import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { SearchButton, SearchText } from "./banner.elements";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";

const SearchBtn = ({ handleSubmit }) => {
  const location = useLocation();
  const history = useHistory();

  const submitHandler = (e) => {
    if (location.pathname === "/") {
      history.push("/jobs");
    }
    handleSubmit(e);
  };

  return (
    <SearchButton onClick={submitHandler}>
      <SearchIcon />
      <SearchText>Search</SearchText>
    </SearchButton>
  );
};

SearchBtn.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchBtn;

/* when the search button is clicked, submitHandler  checks to see if the click happened on the index page
if true, the jobs page and the jobs matching the search parameters are displayed.

else , if the click happened on the jobs page, the filtering just happens.
*/
