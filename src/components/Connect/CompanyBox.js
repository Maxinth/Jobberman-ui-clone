import styled from "styled-components";
import PropTypes from "prop-types";

const CoyLogo = styled.img`
  display: inline-block;
  width: 100%;
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: all 0.2s;
`;

const CompanyBox = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <CoyLogo src={item.img} alt={item.altText} />
      ))}
    </>
  );
};

CompanyBox.propTypes = {
  items: PropTypes.array,
};

export default CompanyBox;
