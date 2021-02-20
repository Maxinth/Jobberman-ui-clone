import { Link } from "react-router-dom";
import React from "react";
import { Box } from "./standOutElements";
import CardContents from "./CardContents";

const StandOutCard = (props) => {
  const { withBtn } = props;

  return (
    <>
      {withBtn ? (
        <Box>
          <CardContents {...props} />
        </Box>
      ) : (
        <Link to="/">
          <CardContents {...props} />
        </Link>
      )}
    </>
  );
};

export default StandOutCard;

/* The container element for the cardContents 

component is changed based on if the withBtn is passed in 

*/
