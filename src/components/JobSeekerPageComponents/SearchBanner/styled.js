import styled from "styled-components";
import { Text, Heading } from "../Profiles/styled";
import searchBackgroundImage from "../../../assets/main-image-gradient.png";

const SearchContainer = styled.section`
  ${Heading} {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 1.2rem;

    :last-child(2) {
      color: #ff6200;
    }
  }
`;

const SearchSection = styled.section`
  padding: 1rem;
  background-image: url(${searchBackgroundImage});
`;

export { Text, Heading, SearchContainer, SearchSection };
