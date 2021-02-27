import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const HomeLink = styled(Link)`
  color: rgb(255, 98, 0);
  margin: 0 0.2rem;
`;

const Span = styled.span`
  color: ${({ colored }) => (colored ? "rgb(255, 98, 0)" : "#333")};
  margin: 0 0.2rem;
`;

export { Container, HomeLink, Span };
