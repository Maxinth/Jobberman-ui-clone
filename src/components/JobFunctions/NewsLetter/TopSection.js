import { Title, Text, Container } from "./styled";
import styled from "styled-components";

const TopSectionContainer = styled(Container)`
  color: rgb(78, 85, 89);

  @media (min-width: 900px) {
    text-align: left;
    > * {
      text-align: inherit !important;
      color: inherit;
    }
  }
`;
const TopSection = () => {
  return (
    <TopSectionContainer>
      <Title>Stay Updated !</Title>
      <Text>
        Join our newsletter and get the latest job listings and career insights
        delivered straight to your inbox.
      </Text>
    </TopSectionContainer>
  );
};

export default TopSection;
