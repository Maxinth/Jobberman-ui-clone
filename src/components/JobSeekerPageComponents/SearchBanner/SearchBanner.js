import styled from "styled-components";
import { Text, Heading } from "../Profiles/styled";
import searchBackgroundImage from "../../../assets/main-image-gradient.png";
import React from "react";

const SearchSection = styled.section`
  padding: 1rem;
  background-image: url(${searchBackgroundImage});
`;
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
// styled.``;
const SearchBanner = () => {
  return (
    <SearchSection>
      <SearchContainer>
        <Heading as="h4">Search And Apply For Jobs Wherever You Are</Heading>
        <Heading as="h4">Never Miss An Opportunity Again</Heading>
        <Text>
          Search and apply for jobs wherever you are with the Jobberman app.
        </Text>
      </SearchContainer>
    </SearchSection>
  );
};

export default SearchBanner;
