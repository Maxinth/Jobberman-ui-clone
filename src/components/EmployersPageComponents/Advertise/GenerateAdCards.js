import { HowTosContainer } from "./styled";
import PropTypes from "prop-types";
import StandOutCard from "../../StandOut/StandOutCard";

const GenerateAdCards = ({ data = [] }) => {
  return (
    <HowTosContainer>
      {data.map((item, index) => (
        <StandOutCard key={index} {...item} />
      ))}
    </HowTosContainer>
  );
};

GenerateAdCards.propTypes = {
  data: PropTypes.array,
};

export default GenerateAdCards;
