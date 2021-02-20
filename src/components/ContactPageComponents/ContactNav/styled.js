import styled from "styled-components";
import { Link } from "react-router-dom";
// index
const ContactNavSection = styled.section`
  background-color: rgb(65, 104, 198);
  /* margin-top: 3rem; */
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 2rem 1.5rem 0rem; */
  max-width: 900px;
  margin: 0 auto;
  /* margin-top: -2rem; */
`;

// ContactNavLink
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
export { ContactNavSection, NavContainer, ListItem, ContactLink };
