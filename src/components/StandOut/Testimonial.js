import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  TestimonyContainer,
  ImageContainer,
  Image,
  Info,
  Name,
  Position,
  MoreInfo,
  Testimony,
} from "./standOutElements";

const Testimonial = ({ img, name, position, testimonial, slidePosition }) => {
  return (
    <TestimonyContainer position={slidePosition}>
      <ImageContainer>
        <Image src={img} alt="customerSuccess" />
      </ImageContainer>
      <Info>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Testimony>{testimonial}</Testimony>
        <MoreInfo>
          <Link to="/">Read More</Link>
        </MoreInfo>
      </Info>
    </TestimonyContainer>
  );
};

Testimonial.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  slidePosition: PropTypes.string,
  testimonial: PropTypes.string,
};
export default Testimonial;
