import { getSlidePosition } from "../useSlider";
import { getItems } from "./data";
import styled from "styled-components";
import CompanyBox from "./CompanyBox";

const Container = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 900px;
  transition: height 0.2s;

  @media (min-width: 424px) {
    height: 480px;
  }
  @media (min-width: 556px) {
    height: 350px;
  }
  @media (min-width: 800px) {
    height: 300px;
  }
  @media (min-width: 952px) {
    height: 250px;
  }
`;

const CompaniesLogo = ({ items, index }) => {
  const slidePosition = (itemIndex) => {
    return getSlidePosition(index, itemIndex, items);
  };

  const {
    batchOne,
    batchZero,
    batchTwo,
    indexOne,
    indexZero,
    indexTwo,
  } = getItems(items);
  return (
    <Container>
      <CompanyBox items={batchZero} position={slidePosition(indexZero)} />
      <CompanyBox items={batchOne} position={slidePosition(indexOne)} />
      <CompanyBox items={batchTwo} position={slidePosition(indexTwo)} />
    </Container>
  );
};

export default CompaniesLogo;
