import { Heading, Categories } from "./styled";
import GenerateCategories from "./GenerateCategories";
import { data } from "./categoryData";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import React from "react";

const Assessments = () => {
  return (
    <>
      <Heading as="h4">Assessments available for these categories </Heading>
      <Categories>
        <GenerateCategories data={data} icon={<ArrowForwardIosRoundedIcon />} />
      </Categories>
    </>
  );
};

export default Assessments;
