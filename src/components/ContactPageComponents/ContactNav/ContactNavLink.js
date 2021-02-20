import React from "react";
import { ListItem, ContactLink } from "./styled";
import PropTypes from "prop-types";

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
