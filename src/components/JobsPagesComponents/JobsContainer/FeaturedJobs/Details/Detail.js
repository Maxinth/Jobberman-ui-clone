import React from "react";
import Contents from "./Contents";
import FeaturedLabel from "../Label";
import { Container } from "./styled";

const Detail = (props) => {
  return (
    <Container>
      <FeaturedLabel />
      <Contents {...props} />
    </Container>
  );
};

export default Detail;
