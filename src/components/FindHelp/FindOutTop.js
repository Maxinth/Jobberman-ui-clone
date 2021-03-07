import React from "react";
import { Text, TextContainer } from "./findHelp.elements";
import { Link } from "react-router-dom";

const FindOutTop = () => {
  return (
    <TextContainer>
      <Link to="/employer">
        <Text colored={true}>
          Find out how we help you get you the best candidates
        </Text>
      </Link>
    </TextContainer>
  );
};

export default FindOutTop;
