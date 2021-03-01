import styled from "styled-components";
import { Btn } from "../../StandOut/standOutElements";

const Container = styled.section`
  padding: 1rem 0;

  > ${Btn} {
    width: 100%;
  }

  @media (min-width: 1024px) {
    > ${Btn} {
      display: none;
    }
  }

  @media (min-width: 1140px) {
    width: 65%;
  }
`;

export { Container };
