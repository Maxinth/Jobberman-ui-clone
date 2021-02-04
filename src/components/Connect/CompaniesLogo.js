import { getSlidePosition } from "../useSlider";
import { getItems } from "./data";
import CompanyBox from "./CompanyBox";
import { Container } from "./styled";

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
