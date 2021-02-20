import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListItem = styled.li`
  flex: 1;
  width: 100%;
`;

const ContactLink = styled(Link)`
  width: 100%;
  display: block;
  padding: 1rem;

  text-align: center;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: bolder;
  :first-child {
    /* border-bottom: 6px solid #fff; */
  }
`;

const ContactNavLink = ({ item }) => {
  return (
    <ListItem>
      <ContactLink to="/">{item}</ContactLink>
    </ListItem>
  );
};

ContactNavLink.propTypes = {
  item: PropTypes.string,
};

export default ContactNavLink;
