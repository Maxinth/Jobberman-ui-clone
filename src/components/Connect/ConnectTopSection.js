import React from "react";
import Headings from "./Headings";
import CompaniesLogo from "./CompaniesLogo";
import { CompaniesLogosContainer } from "./styled";
import PropTypes from "prop-types";

const ConnectTopSection = ({ items, index }) => {
  return (
    <>
      <Headings />
      <CompaniesLogosContainer>
        <CompaniesLogo items={items} index={index} />
      </CompaniesLogosContainer>
    </>
  );
};

ConnectTopSection.propTypes = {
  items: PropTypes.array,
  index: PropTypes.number,
};

export default ConnectTopSection;
