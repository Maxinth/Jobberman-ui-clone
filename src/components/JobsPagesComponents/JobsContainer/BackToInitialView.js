import React from "react";
import CTA from "../../CTA";
import { useGlobalContext } from "../../context";
import { BtnBox } from "./styled";

const BackToInitialView = () => {
  const { resetToInitialData } = useGlobalContext();

  return (
    <BtnBox onClick={resetToInitialData}>
      <CTA text="see page's Jobs" goTo="/jobs" />
    </BtnBox>
  );
};

export default BackToInitialView;
