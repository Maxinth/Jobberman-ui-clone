import React from "react";
import Detail from "./Detail";
import PropTypes from "prop-types";
import { checkSize } from "./data";

const GenerateDetail = ({ data = [] }) => {
  return (
    <>
      {data.map((item) => (
        <Detail key={item.title} {...item} length={checkSize(data)} />
      ))}
    </>
  );
};

GenerateDetail.propTypes = {
  data: PropTypes.array,
};

export default GenerateDetail;
