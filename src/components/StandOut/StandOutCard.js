import { Link } from "react-router-dom";
import { IconContainer, Title, Text } from "./standOutElements";
import PropTypes from "prop-types";

const StandOutCard = ({ icon, title, howTo, optionalText = "" }) => {
  return (
    <Link to="/">
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Text>{howTo}</Text>
      {/* render only when optionalText isn't an empty string/falsy */}
      {optionalText && <Text>{optionalText}</Text>}
    </Link>
  );
};

StandOutCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  howTo: PropTypes.string,
  optionalText: PropTypes.string,
};

export default StandOutCard;
