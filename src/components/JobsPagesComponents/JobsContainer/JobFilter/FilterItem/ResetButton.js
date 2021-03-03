import React from "react";
import { ResetBtnContainer } from "./styled";
import CTA from "../../../../CTA";
import { useGlobalContext } from "../../../../context";

const ResetButton = () => {
  const { resetToInitialData, resetChoicesValues } = useGlobalContext();

  const handleClick = () => {
    resetToInitialData();
    resetChoicesValues();
  };

  return (
    <ResetBtnContainer onClick={handleClick}>
      <CTA text="reset filter" goTo="/jobs" isBlack={true} />
    </ResetBtnContainer>
  );
};

export default ResetButton;
