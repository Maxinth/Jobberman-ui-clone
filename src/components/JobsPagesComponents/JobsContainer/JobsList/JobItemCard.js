import React from "react";
import { JobContainer, Post } from "./styled";
import FinalSection from "./FinalSection";
import DetailsMain from "./DetailsMain";

const JobItemCard = (props) => {
  const { jobTitle, jobModule, time, requirement, ...detailsTopProps } = props;
  return (
    <JobContainer>
      <Post>{jobTitle}</Post>
      <DetailsMain
        detailsTopProps={detailsTopProps}
        jobModule={jobModule}
        time={time}
      />
      <FinalSection requirements={requirement} />
    </JobContainer>
  );
};

export default JobItemCard;

/* detailsProp is spread in line 7  while the initial object is passed to detailsTopProp in line 12

to be spread once again in the DetailsTopSection component - a child to DetailsMain.
*/
