import PropTypes from "prop-types";
import { CoyLogo, CompaniesLogos } from "./styled";

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
