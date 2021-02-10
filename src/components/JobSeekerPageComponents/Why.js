import styled from "styled-components";
import PropTypes from "prop-types";

const WhyBox = styled.section`
  border: 30px solid rgb(216, 216, 216);
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.5s;
  opacity: ${({ match }) => (match === "current" ? 1 : 0)};
  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    /* min-height: 553px; */
  }

  @media (min-width: 1200px) {
    /* min-height: 400px; */
    /* max-height: 490px; */
  }
`;

const Heading = styled.h3`
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-size: calc(1rem + 2vw);
  font-weight: 700;

  @media (min-width: 960px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;
const Text = styled.p`
  padding: 1rem;
  font-size: calc(0.4rem + 2vw);
  text-align: center;
  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
  @media (min-width: 960px) {
    font-size: 1rem;
    text-align: left;
  }
`;
const Item = styled.div`
  color: rgb(78, 85, 89);

  > * {
    color: inherit;
  }
  font-family: "Open Sans", sans-serif;
  :first-child {
    margin-bottom: 2rem;
    transition: margin-bottom 0.2;
  }
  @media (min-width: 960px) {
    :first-child {
      margin-bottom: unset;
      border-right: 30px solid rgb(216, 216, 216);
      width: 700px;
    }
  }
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  display: block;
  /* max-height: 490px; */
`;

const Why = ({
  title,
  mainText,
  image,

  matchItem,
}) => {
  return (
    <WhyBox match={matchItem}>
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
  matchItem: PropTypes.string,
};

export default Why;
