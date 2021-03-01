import React from "react";
import { ResetBtnContainer } from "./styled";
import CTA from "../../../../CTA";

const ResetButton = () => {
  return (
    <ResetBtnContainer>
      <CTA text="reset filter" goTo="/jobs" isBlack={true} />
    </ResetBtnContainer>
  );
};

export default ResetButton;
