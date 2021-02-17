import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import CTA from "../../CTA";
import GenerateCategories from "../FeaturedProduct/GenerateCategories";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const ListContainer = styled.ul`
  width: 100%;
  padding: 1rem 2rem;

  svg {
    font-size: 1.5rem;
  }
  li {
    margin-bottom: 1rem;
  }
  span {
    margin-left: 0.5rem;
  }
  button {
    margin-top: 2rem;
    width: 100%;
    a {
      font-size: 1.2rem;
    }
  }
`;

const ItemsContainer = styled.section`
  background-color: rgb(249, 250, 251);
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > svg {
    transform: translateY(-12px);
    font-size: 2rem;
    color: grey;
  }
`;

const PricesDetails = ({ data = [], btnText, goTo, index }) => {
  return (
    <ItemsContainer>
      <InfoRoundedIcon />
      <ListContainer>
        <GenerateCategories data={data} />
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
