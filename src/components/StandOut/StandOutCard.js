import { Link } from "react-router-dom";
import { IconContainer, Title, Text } from "./standOutElements";
import PropTypes from "prop-types";

const StandOutCard = ({ icon, title, howTo }) => {
  return (
    <Link to="/">
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Text>{howTo}</Text>
    </Link>
  );
};

StandOutCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  howTo: PropTypes.string,
};

export default StandOutCard;
