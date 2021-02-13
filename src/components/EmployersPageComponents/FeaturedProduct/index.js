import {
  HowTosContainer,
  Heading,
  Text,
} from "../../StandOut/standOutElements";
import { ConnectBox as ProductBox } from "../../Connect/styled";
import styled from "styled-components";
import GenerateCategories from "./GenerateCategories";
const FeaturedContainer = styled(HowTosContainer)`
  display: block;
  background-color: rgb(250, 250, 250);
  padding: 1rem 2rem;
  ${Heading} {
    text-align: center;
    margin: 2rem 0;
  }

  ${ProductBox} {
    padding: 1rem 2rem;
    max-width: 900px;
    h4 {
      font-size: 1.7rem;
    }
    p + p {
      margin-top: 3rem;
    }
  }

  ${Text} {
    max-width: 600px;
    line-height: 1.8;
    font-size: 1.2rem;
    /* text-align: left; */
  }
`;

const Categories = styled.ul`
  width: 100%;
`;
const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <Heading>Featured Product</Heading>
      <ProductBox>
        <Heading as="h4">
          We now offer skills assessments when creating a job listing
        </Heading>
        <Text>
          You decrease the time spent on sorting through the huge volume of
          applications from jobseekers. You can sort through job seekers based
          on test scores they achieve
        </Text>
        <Text>
          An assessment will not only help you identify candidates that will be
          a good fit for jobs at your company, but it will also help predict a
          new hire’s on-the-job performance. It Introduces an element of
          objectivity into the hiring process by providing standardised results
          that can be applied to all your applicants.
        </Text>
        <Heading as="h4">Assessments available for these categories </Heading>
        <Categories>
          <GenerateCategories />
        </Categories>
      </ProductBox>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
