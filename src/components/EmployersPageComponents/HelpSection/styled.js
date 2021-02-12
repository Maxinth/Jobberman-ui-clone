import { Heading } from "../Advertise/styled";
import { Text } from "../../StandOut/standOutElements";
import { ConnectContainer } from "../../Connect/styled";
import styled from "styled-components";

const HelpContainer = styled(ConnectContainer)`
  max-width: 1250px;
  padding: 1rem;
  margin: 0rem auto 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${Heading} {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: rgb(78, 85, 89);
  }

  ${Text} {
    font-size: 1.2rem;
    line-height: 1.7;
    :last-child {
      color: #ff6200;
      margin-top: 0.5rem;
    }
  }
`;

const Container = styled.div``;

export { HelpContainer, Container, Heading, Text };
