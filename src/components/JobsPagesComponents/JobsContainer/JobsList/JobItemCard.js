import React from "react";
import { JobContainer, DetailsBox, Post } from "./styled";
import DetailsTopSection from "./DetailsTopSection";
import DetailsBottomSection from "./DetailsBottomSection";
import FinalSection from "./FinalSection";

const JobItemCard = (props) => {
  const { jobTitle, jobModule, time, requirement, ...detailsTopProps } = props;
  return (
    <JobContainer>
      <Post>{jobTitle}</Post>
      <DetailsBox>
        <DetailsTopSection {...detailsTopProps} />
        <DetailsBottomSection jobModule={jobModule} time={time} />
      </DetailsBox>
      <FinalSection requirements={requirement} />
    </JobContainer>
  );
};

export default JobItemCard;
