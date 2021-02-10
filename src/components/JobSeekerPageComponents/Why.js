import styled from "styled-components";
import PropTypes from "prop-types";

const WhyBox = styled.section`
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
const Why = ({ title, mainText, image }) => {
  return (
    <WhyBox>
      <Item>
        <Heading as="h4">{title}</Heading>
        <Text>{mainText}</Text>
      </Item>
      <Item>
        <Image src={image} alt={title} />
      </Item>
    </WhyBox>
  );
};

Why.propTypes = {
  title: PropTypes.string,
  mainText: PropTypes.string,
  image: PropTypes.string,
};

export default Why;
