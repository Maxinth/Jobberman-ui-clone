import styled from "styled-components";
import { Container } from "../JobCount/styled";

const FilterContainer = styled(Container)`
  margin-top: 1rem;
  color: rgb(78, 85, 89);
  display: none;
  background-color: #fff;
  @media (min-width: 1140px) {
    display: block;
    width: 35%;
    margin-left: 1.2rem;
  }
`;

const Box = styled.div`
  form {
    border: 1px solid rgb(231, 228, 228);
  }
`;

export { Box, FilterContainer };
