import React from "react";
import { Text } from "../index";
import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;
const Mail = styled.a`
  color: rgb(36, 133, 175);
  margin-left: 0.2rem;
`;

const ContactBox = styled.div`
  margin-bottom: 1rem;
  transition: margin-bottom 0.2;
  @media (min-width: 900px) {
    margin-bottom: 2rem;
  }
`;

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
