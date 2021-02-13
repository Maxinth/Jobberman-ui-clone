import { Heading } from "../../StandOut/standOutElements";
import styled from "styled-components";
import GenerateCategories from "./GenerateCategories";

const Categories = styled.ul`
  width: 100%;
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
