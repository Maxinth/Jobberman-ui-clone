import React from "react";
import { Text, Heading, SearchContainer, SearchSection } from "./styled";

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
