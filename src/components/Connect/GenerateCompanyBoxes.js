import React from "react";
import { getItems } from "./data";
import CompanyBox from "./CompanyBox";
import PropTypes from "prop-types";

const GenerateCompanyBoxes = ({ items, slidePosition }) => {
  const { logosData } = getItems(items);

  return (
    <>
      {logosData.map((item, index) => (
        <CompanyBox
          items={item.batch}
          position={slidePosition(item.batchIndex)}
          key={index}
        />
      ))}
    </>
  );
};

GenerateCompanyBoxes.propTypes = {
  items: PropTypes.array,
  slidePosition: PropTypes.func,
};

export default GenerateCompanyBoxes;
