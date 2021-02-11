import styled from "styled-components";
import { Title } from "../styled";
const Text = styled.p`
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  line-height: 1.7;
`;

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;
const TopHeading = () => {
  return (
    <HeadingContainer>
      <Title>
        Complete your profile and match better with the right employers.
      </Title>
      <Text>
        As you complete your profile, we will unlock features that improve your
        chances of getting the right job
      </Text>
    </HeadingContainer>
  );
};

export default TopHeading;
