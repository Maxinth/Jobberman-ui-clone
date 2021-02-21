import styled from "styled-components";
import {
  Container,
  Heading,
  HelpBox as ContactPageBox,
} from "../FindHelp/findHelp.elements";

const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  color: inherit;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 300;
`;

const ContactContainer = styled(Container)`
  color: rgb(78, 85, 89);
  padding: unset;
  padding-top: 4.5rem;
  padding-bottom: 7rem;
  background-color: #fff;
  transition: background-color 0.2s;

  @media (min-width: 1024px) {
    background: rgb(242, 242, 242);
  }

  ${Heading} {
    margin: 3rem 0;
  }
  ${ContactPageBox} {
    display: block;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: unset;
    padding: 2rem;

    transition: all 0.2s;
    @media (min-width: 1024px) {
      box-shadow: 1px 1px 6px grey;
      padding: 4rem 4rem;
    }
  }
`;

const HrBreak = styled.hr`
  color: ghostwhite;
  height: 0.5px;
`;

export { Text, HrBreak, ContactContainer, ContactPageBox, Heading };
