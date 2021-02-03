import { data } from "./data";
import Headings from "./Headings";
import HowToBlock from "./HowToBlock";
import { Container, HowTo } from "./standOutElements";
import styled from "styled-components";
import testImg from "../../assets/babatunde-ogunyemi.jpg";
import { Link } from "react-router-dom";
const Testimonials = styled.section`
  margin-top: 1rem;
`;

const Testimonial = styled.section`
  margin: 0 auto;
  max-width: 900px;
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;

  @media (min-width: 600px) {
    /* flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    /* max-height: 400px; */
  }
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  border-radius: 10px;
  @media (min-width: 600px) {
    /* min-height: 200px;
    min-width: 200px;
    max-height: 300px;
    max-width: 300px; */
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    align-items: flex-start;

    padding: 1rem;
  }
`;

const Name = styled.h5`
  font-size: calc(1.1rem + 2vw);
  transition: font-size 0.2;
  border-bottom: 4px solid rgb(255, 98, 0);
  padding: 0.5rem;
  text-transform: uppercase;

  @media (min-width: 600px) {
    font-size: calc(0.5rem + 2vw);
  }

  @media (min-width: 768px) {
    font-size: calc(0.7rem + 2vw);
  }

  @media (min-width: 900px) {
    font-size: 1.8rem;
  }
`;
const Position = styled.h6`
  font-size: 1.1rem;
  padding: 0.5rem;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  @media (min-width: 600px) {
    font-size: calc(0.2rem + 2vw);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
const Text = styled.p`
  font-weight: 300;
  line-height: 26.4px;
  overflow-wrap: break-word;
  padding-top: 10px;

  font-size: 1rem;
`;
const MoreInfo = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin-top: 1rem;

  a {
    color: rgb(255, 98, 0);
    text-transform: uppercase;
    font-size: 1rem;

    display: block;
    width: 100%;
  }
`;
// styled.div``;
const StandOut = () => {
  return (
    <Container>
      <Headings />
      <HowTo>
        <HowToBlock data={data} />
      </HowTo>

      {/* move to its own component */}
      <Testimonials>
        <Testimonial>
          <ImageContainer>
            <Image src={testImg} alt="customerSuccess" />
          </ImageContainer>
          <Info>
            <Name>BabaTunde Ogunyemi</Name>
            <Position>Hr Manager - StarTimes Nigeria</Position>
            <Text>
              We used the Pro Recruit product. The quality of candidates we
              received have been awesome, as well as quality of CVs. Jobberman
              seems to get us what we need, at the right time - so there’s no
              need for us to start going through CVs, they just give us what we
              need. Before Jobberman, you’d probably rely on referrals, and most
              times you don’t get the best from that. I will definitely use
              Jobberman again!
            </Text>
            <MoreInfo>
              <Link to="/">Read More</Link>
            </MoreInfo>
          </Info>
        </Testimonial>
      </Testimonials>
    </Container>
  );
};

export default StandOut;
