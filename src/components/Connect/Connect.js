import React from "react";
import styled from "styled-components";
import Headings from "./Headings";
import useSliderAndGetCurrentValues from "../useSliderAndGetCurrentValues";
import { data } from "./data";
import CompaniesLogo from "./CompaniesLogo";
import CircleControls from "../../components/CircleControls";
import CTA from "../CTA";

const ConnectContainer = styled.section`
  background-color: rgb(242, 242, 242);
  font-family: "Open Sans", sans-serif;
  padding: 4rem 2rem;
`;

const ConnectBox = styled.section`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 3rem;
  }
`;

const CompaniesLogosContainer = styled.section`
  /* margin-top: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Connect = () => {
  const {
    items,
    index,
    makeCurrentSlide,
    matchCurrentItem,
  } = useSliderAndGetCurrentValues(data, 5000);
  return (
    <ConnectContainer>
      <ConnectBox>
        <Headings />
        <CompaniesLogosContainer>
          <CompaniesLogo items={items} index={index} />
        </CompaniesLogosContainer>
        <CircleControls
          data={items}
          setIndex={makeCurrentSlide}
          currentItem={matchCurrentItem}
        />
        <CTA text="view more companies hiring" goTo="/companies" />
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
