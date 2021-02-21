import React from "react";
import { Box, Text } from "./styled";
import { singleHeading } from "./data";

const QuestionItem = ({ question, answer }) => {
  return (
    <Box match={singleHeading(question)}>
      {/* conditionally render this section */}
      {question && (
        <Text>
          {question === "Applications" ? question : `Q: ${question}`}{" "}
        </Text>
      )}

      {/* conditionally render here too */}
      {answer && <Text> A: {answer}</Text>}
    </Box>
  );
};

export default QuestionItem;
