import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const IconContainer = styled.span`
  background-color: rgb(255, 98, 0);
  border-radius: 100px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #fff;
    font-size: 2rem;
  }
`;

const Title = styled.h5`
  color: rgb(255, 98, 0);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 300;
  margin: 0.5rem 0 2rem;
`;

const Text = styled.p`
  color: rgb(78, 85, 89);
  max-width: 340px;
  text-align: center;
  font-size: 1rem;
  color: rgb(78, 85, 89);

  @media (min-width: 879px) {
    max-width: 250px;
  }
`;
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
