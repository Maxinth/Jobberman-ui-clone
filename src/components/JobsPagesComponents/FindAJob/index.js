import React from "react";
import Contents from "./Contents";
import { FindJobContainer } from "./styled";
import DropChildFromTop from "../../DropFromTop";

const FindAJob = () => {
  return (
    <DropChildFromTop>
      <FindJobContainer>
        <Contents />
      </FindJobContainer>
    </DropChildFromTop>
  );
};

export default FindAJob;
