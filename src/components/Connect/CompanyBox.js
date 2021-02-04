import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const CoyLogo = styled.img`
  display: inline-block;
  width: 100%;
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: all 0.2s;
`;

const CompaniesLogos = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  // here

  position: absolute;
  /* top: 12rem; */
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
      transform: translateX(0%);
    `}

  ${(props) =>
    props.position === "lastSlide" &&
    css`
      transform: translateX(-100%);
    `}

    
${(props) =>
    props.position === "nextSlide" &&
    css`
      transform: translateX(100%);
    `}

  // here
  > * {
    flex: 1;
    margin: 0 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 900px) {
    margin-bottom: unset;
  }
`;

const CompanyBox = ({ items, position }) => {
  return (
    <CompaniesLogos position={position}>
      {items.map((item, index) => (
        <CoyLogo
          src={item.img}
          alt={item.altText}
          key={`${index}-${item.altText}`}
        />
      ))}
    </CompaniesLogos>
  );
};

CompanyBox.propTypes = {
  items: PropTypes.array,
  position: PropTypes.string,
};

export default CompanyBox;
