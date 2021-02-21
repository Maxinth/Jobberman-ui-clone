import React from "react";
import { ListItem, ContactLink } from "./styled";
import PropTypes from "prop-types";

const ContactNavLink = ({ item, index, id, changePage }) => {
  return (
    <ListItem onClick={() => changePage(index)} currentItem={id === index}>
      <ContactLink href={`#${item.toLowerCase()}`}>{item}</ContactLink>
    </ListItem>
  );
};

ContactNavLink.propTypes = {
  item: PropTypes.string,
  id: PropTypes.number,
  index: PropTypes.number,
  changePage: PropTypes.func,
};

export default ContactNavLink;
