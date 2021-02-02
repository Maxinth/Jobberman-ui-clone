import styled from "styled-components";

const JobsContainer = styled.section`
  @media (min-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > * {
      margin-right: 1rem;
    }
  }
`;

export { JobsContainer };
