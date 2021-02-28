import React from "react";
import { JobContainer, DetailsBox, Post } from "./styled";
import DetailsTopSection from "./DetailsTopSection";
import DetailsBottomSection from "./DetailsBottomSection";
import FinalSection from "./FinalSection";

const JobItemCard = () => {
  return (
    <JobContainer>
      <Post>Web/Social Media Associate</Post>
      <DetailsBox>
        <DetailsTopSection />
        <DetailsBottomSection />
      </DetailsBox>
      <FinalSection />
    </JobContainer>
  );
};

export default JobItemCard;
