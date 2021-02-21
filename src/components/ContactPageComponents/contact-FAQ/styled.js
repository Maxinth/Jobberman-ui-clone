import { Text } from "../contact-About/styled";
import styled from "styled-components";

const Box = styled.div`
  margin-bottom: ${({ match }) => (match ? "1.5rem" : ".1rem")};
  > ${Text} {
    :first-child {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    :last-child {
      padding-left: 0.2rem;
    }
  }
`;

export { Box, Text };
