import React from "react";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from "prop-types";
const DetailText = styled.p`
  max-width: 600px;
  color: rgb(78, 85, 89);
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.7;
  transition: max-width 0.2s;
  @media (min-width: 1024px) {
    max-width: 300px;
  }
`;

const DetailBox = styled.div`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;
  transition: all 0.2;
  + div {
    transition: margin-left 0.2s;
  }
  @media (min-width: 1024px) {
    + div {
      margin-left: 4rem;
    }
  }

  @media (min-width: 1024px) {
    ${({ match }) =>
      match &&
      css`
        ${DetailText} {
          max-width: 700px;
          width: 100%;
        }
      `}
  }
`;
const Span = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled(ArrowForwardIosIcon)`
  color: rgb(255, 98, 0);
  font-size: 0.8rem !important;
  margin-right: 0.5rem;
`;

const Detail = ({ title, text, length }) => {
  return (
    <DetailBox match={length}>
      <Title>
        <Icon /> <Span>{title}</Span>
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
