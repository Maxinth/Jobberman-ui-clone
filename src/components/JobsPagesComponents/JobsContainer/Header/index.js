import React from "react";
import PropTypes from "prop-types";
import { Header, Title } from "./styled";

const HeaderMain = ({ text, el }) => {
  return (
    <Header>
      <Title as={el}>{text}</Title>
    </Header>
  );
};

HeaderMain.propTypes = {
  text: PropTypes.string,
  el: PropTypes.string,
};

export default HeaderMain;
