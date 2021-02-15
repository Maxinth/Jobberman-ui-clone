import { HelpContainer, Container, MainContainer } from "./styled";
import HelpMain from "./HelpMain";

const HelpSection = () => {
  return (
    <MainContainer>
      <HelpContainer>
        <Container>
          <HelpMain />
        </Container>
      </HelpContainer>
    </MainContainer>
  );
};

export default HelpSection;
