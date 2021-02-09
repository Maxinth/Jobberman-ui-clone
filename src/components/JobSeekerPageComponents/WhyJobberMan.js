import styled from "styled-components";
import seekerOne from "../../assets/seeker-1.jpg";
const WhySection = styled.section`
  padding: 1rem 2rem;
  background: #fff;
  margin: 3rem 0;
  > h3 {
    margin-top: unset;
    margin-bottom: 1rem;
  }
`;
const WhyContainer = styled.section`
  border: 30px solid rgb(216, 216, 216);
  border-radius: 5px;
  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Heading = styled.h3`
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-size: calc(1rem + 2vw);
  font-weight: 700;
`;
const Text = styled.p`
  padding: 1rem;
  font-size: calc(0.4rem + 2vw);
  text-align: center;
  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
`;
const Item = styled.div`
  font-family: "Open Sans", sans-serif;
  @media (min-width: 960px) {
    :first-child {
      border-right: 30px solid rgb(216, 216, 216);
    }
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  display: block;
`;
// styled.``;
const WhyJobberMan = () => {
  return (
    <WhySection>
      <Heading>Why JobberMan</Heading>
      <WhyContainer>
        <Item>
          <Heading as="h4">A Powerful Career</Heading>
          <Text>
            Let opportunity find you with a Jobberman Profile. Show off your
            skills, education and experience to employers.
          </Text>
        </Item>
        <Item>
          <Image src={seekerOne} alt="seekerOne" />
        </Item>
      </WhyContainer>
    </WhySection>
  );
};

export default WhyJobberMan;
