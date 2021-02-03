import { Link } from "react-router-dom";
import styled from "styled-components";
import testImg from "../../assets/babatunde-ogunyemi.jpg";
import PropTypes from "prop-types";

const Container = styled.section`
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  border-radius: 10px;
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

const Testimonial = ({ img, name, position, testimonial }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={img} alt="customerSuccess" />
      </ImageContainer>
      <Info>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Text>{testimonial}</Text>
        <MoreInfo>
          <Link to="/">Read More</Link>
        </MoreInfo>
      </Info>
    </Container>
  );
};

Testimonial.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  testimonial: PropTypes.string,
};
export default Testimonial;
