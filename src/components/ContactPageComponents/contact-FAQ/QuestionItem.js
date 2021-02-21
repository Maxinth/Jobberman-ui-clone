import React from "react";
import { Text, Mail } from "../contact-About/styled";
import styled from "styled-components";
import { singleHeading } from "./data";

const Box = styled.div`
  margin-bottom: ${({ match }) => (match ? "1.5rem" : ".1rem")};
  > ${Text} {
    :first-child {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    :last-child {
      padding-left: 0.2rem;
    }
  }
`;

const QuestionItem = ({ question, answer }) => {
  return (
    <Box match={singleHeading(question)}>
      {question && (
        <Text>
          {question === "Applications" ? question : `Q: ${question}`}{" "}
        </Text>
      )}
      {answer && <Text> A: {answer}</Text>}
    </Box>
  );
};

export default QuestionItem;
