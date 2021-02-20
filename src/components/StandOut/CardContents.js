import React from "react";
import CTA from "../CTA";
import PropTypes from "prop-types";
import { IconContainer, Title, Text } from "./standOutElements";

const CardContents = ({
  icon,
  title,
  howTo,
  optionalText,
  withBtn,
  text,
  goTo,
}) => {
  return (
    <>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Text>{howTo}</Text>
      {/* render only when optionalText isn't an empty string/falsy */}
      {optionalText && <Text>{optionalText}</Text>}
      {withBtn && <CTA text={text} goTo={goTo} />}
    </>
  );
};

CardContents.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  howTo: PropTypes.string,
  text: PropTypes.string,
  goTo: PropTypes.string,
  optionalText: PropTypes.string,
  withBtn: PropTypes.bool,
};

export default CardContents;
