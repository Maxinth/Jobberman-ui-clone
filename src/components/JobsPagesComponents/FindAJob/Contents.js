import React from "react";
import FormMain from "../../Banners/FormMain";
import { Title, BgBox } from "./styled";
import PropTypes from "prop-types";

const Contents = () => {
  return (
    <>
      <Title>Find A Job</Title>
      <BgBox>
        <FormMain />
      </BgBox>
    </>
  );
};

Contents.propTypes = {
  handleSearch: PropTypes.func,
};

export default Contents;
