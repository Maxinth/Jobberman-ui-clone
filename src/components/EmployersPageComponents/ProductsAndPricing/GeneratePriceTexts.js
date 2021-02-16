import PropTypes from "prop-types";
import styled from "styled-components";
const PriceText = styled.p`
  padding: 1rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  color: rgb(78, 85, 89);
  font-size: 1.1rem;
`;

const GeneratePriceTexts = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <PriceText key={index}>{item}</PriceText>
      ))}
    </>
  );
};

GeneratePriceTexts.propTypes = {
  data: PropTypes.array,
};
export default GeneratePriceTexts;
