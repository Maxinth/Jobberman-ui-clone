import React from "react";
import ContactBox from "./ContactBox";
import PropTypes from "prop-types";

const GenerateInputs = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ContactBox key={item.label} {...item} />
      ))}
    </>
  );
};

GenerateInputs.propTypes = {
  data: PropTypes.array,
};

export default GenerateInputs;
