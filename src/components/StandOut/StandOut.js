import { data } from "./data";
import Headings from "./Headings";
import HowToBlock from "./HowToBlock";
import { Container, HowTo } from "./standOutElements";

const StandOut = () => {
  return (
    <Container>
      <Headings />
      <HowTo>
        <HowToBlock data={data} />
      </HowTo>
    </Container>
  );
};

export default StandOut;
