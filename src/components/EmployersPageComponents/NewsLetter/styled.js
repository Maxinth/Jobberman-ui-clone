import styled from "styled-components";
import { FeaturedContainer } from "../FeaturedProduct/styled";
import { Btn } from "../../StandOut/standOutElements";

const NLContainer = styled(FeaturedContainer)`
  padding-bottom: 4rem;
  ${Btn} > a {
    margin-bottom: unset;
  }
`;

export { NLContainer };
