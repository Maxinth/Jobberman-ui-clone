import React from "react";
import styled from "styled-components";
import { getItems } from "./data";
import CompanyBox from "./CompanyBox";
import Headings from "./Headings";
import { getSlidePosition } from "../useSlider";
import useSlider from "../useSlider";
import { data } from "./data";
import CompaniesLogo from "./CompaniesLogo";

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
`;

// const Container = styled.section`
//   position: relative;
//   display: flex;
//   overflow: hidden;
//   width: 100%;
//   height: 400px;
// `;
const CompaniesLogosContainer = styled.section`
  /* margin-top: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// styled.``;
const Connect = () => {
  const { items, index, setIndex } = useSlider(data, 5000);

  return (
    <ConnectContainer>
      <ConnectBox>
        <Headings />
        <CompaniesLogosContainer>
          <CompaniesLogo items={items} index={index} />
        </CompaniesLogosContainer>
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
