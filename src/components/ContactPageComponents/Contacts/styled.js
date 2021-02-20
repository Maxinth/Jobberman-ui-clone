import styled from "styled-components";

// Contact
const Heading = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Mail = styled.a`
  color: rgb(36, 133, 175);
  margin-left: 0.2rem;
  font-weight: 500;
`;

const ContactBox = styled.div`
  margin-bottom: 1rem;
  transition: margin-bottom 0.2;
  @media (min-width: 900px) {
    margin-bottom: 2rem;
  }
`;

// index
const Container = styled.section`
  margin-top: 2rem;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 4rem;
`;

export { Heading, Mail, ContactBox, Container };
