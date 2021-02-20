import React from "react";
import { Text } from "../styled";
import { Heading, Mail, ContactBox } from "./styled";
import PropTypes from "prop-types";

const Contact = ({ heading, detail, mail }) => {
  return (
    <ContactBox>
      {heading && <Heading> {heading}</Heading>}
      <Text>
        {detail}
        <Mail href={`mailto:${mail}`}>{mail}</Mail>
      </Text>
    </ContactBox>
  );
};

Contact.propTypes = {
  heading: PropTypes.string,
  detail: PropTypes.string,
  mail: PropTypes.string,
};

export default Contact;
