import { Heading } from "../../StandOut/standOutElements";
import styled from "styled-components";
import GenerateCategories from "./GenerateCategories";

const Categories = styled.ul`
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Assessments = () => {
  return (
    <>
      <Heading as="h4">Assessments available for these categories </Heading>
      <Categories>
        <GenerateCategories />
      </Categories>
    </>
  );
};

export default Assessments;
