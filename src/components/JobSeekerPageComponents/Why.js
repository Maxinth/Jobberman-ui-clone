import { WhyBox, Heading, Text, Item, Image } from "./styled";
import PropTypes from "prop-types";
import React from "react";

const Why = ({ title, mainText, image, matchItem }) => {
  return (
    <WhyBox match={matchItem}>
      <Item>
        <Heading as="h4">{title}</Heading>
        <Text>{mainText}</Text>
      </Item>
      <Item>
        <Image src={image} alt={title} />
      </Item>
    </WhyBox>
  );
};

Why.propTypes = {
  title: PropTypes.string,
  mainText: PropTypes.string,
  image: PropTypes.string,
  matchItem: PropTypes.string,
};

export default Why;
