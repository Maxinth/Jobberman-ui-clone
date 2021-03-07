import React from "react";
import { data } from "./data";
import { Link } from "react-router-dom";
import { TextContainer, Text } from "./findHelp.elements";

const GenerateSignUpTexts = () => {
  return (
    <>
      {data.map((item) => (
        <TextContainer key={item.linkText}>
          <Link to={item.link}>
            <Text colored={true}>{item.linkText}</Text>
          </Link>
          {item.moreText}
        </TextContainer>
      ))}
    </>
  );
};

export default GenerateSignUpTexts;
