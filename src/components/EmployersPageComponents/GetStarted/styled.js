import styled from "styled-components";
import { Heading } from "../Advertise/styled";
import { Container } from "../ProductsAndPricing/styled";
import { Span, Text } from "../FeaturedProduct/styled";

// index
const GetStartedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(78, 85, 89);

  ${Text} {
    max-width: unset;
    font-size: 1.2rem;
    font-family: "Open Sans", sans-serif;
  }
  ${Heading} {
    margin-bottom: unset;
    font-weight: normal;
  }
  ${Span} {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

export { GetStartedContainer, Heading, Span, Text };
