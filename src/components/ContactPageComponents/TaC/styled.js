import { Text } from "../styled";
import { Mail } from "../Contacts/styled";
import styled from "styled-components";

const TacText = styled(Text)`
  text-align: center;
  margin-top: 4rem;
  font-size: 0.8rem;
  ${Mail} {
    margin: 0 0.2rem;
  }
`;

export { Mail, TacText };
