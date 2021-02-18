import React from "react";
import GenerateDetail from "./GenerateDetail";
import { topSection, finalSection } from "./data";
import { InnerBox } from "./styled";

const EndToEndBottomSection = () => {
  return (
    <>
      <InnerBox>
        <GenerateDetail data={topSection} />
      </InnerBox>
      <GenerateDetail data={finalSection} />
    </>
  );
};

export default EndToEndBottomSection;
