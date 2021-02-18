import React from "react";
import PropTypes from "prop-types";
import { DetailText, DetailBox, DetailSpan, Title, Icon } from "./styled";

const Detail = ({ title, text, length }) => {
  return (
    <DetailBox match={length}>
      <Title>
        <Icon /> <DetailSpan>{title}</DetailSpan>
      </Title>
      <DetailText>{text}</DetailText>
    </DetailBox>
  );
};

Detail.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  length: PropTypes.bool,
};
export default Detail;
