import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import CTA from "../../CTA";
import GenerateCategories from "../FeaturedProduct/GenerateCategories";
import { ListContainer, ItemsContainer } from "./styled";
import PropTypes from "prop-types";
import React from "react";

const PricesDetails = ({ data = [], btnText, goTo, index }) => {
  return (
    <ItemsContainer>
      <InfoRoundedIcon />
      <ListContainer>
        <GenerateCategories data={data} itemIndex={index} />
        <CTA text={btnText} goTo={goTo} index={index} />
      </ListContainer>
    </ItemsContainer>
  );
};

PricesDetails.propTypes = {
  data: PropTypes.array,
  btnText: PropTypes.string,
  goTo: PropTypes.string,
  index: PropTypes.number,
};

export default PricesDetails;
