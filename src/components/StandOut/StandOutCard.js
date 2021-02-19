import { Link } from "react-router-dom";
import { IconContainer, Title, Text } from "./standOutElements";
import PropTypes from "prop-types";
import React from "react";
import CTA from "../CTA";
const StandOutCard = ({
  icon,
  title,
  howTo,
  optionalText = "",
  withBtn,
  text,
  goTo,
}) => {
  return (
    <Link to="/">
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Text>{howTo}</Text>
      {/* render only when optionalText isn't an empty string/falsy */}
      {optionalText && <Text>{optionalText}</Text>}
      {withBtn && <CTA text={text} goTo={goTo} />}
    </Link>
  );
};

StandOutCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  howTo: PropTypes.string,
  text: PropTypes.string,
  goTo: PropTypes.string,
  optionalText: PropTypes.string,
  withBtn: PropTypes.bool,
};

export default StandOutCard;
