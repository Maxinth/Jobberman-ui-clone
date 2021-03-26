import React from "react";
import EmployersPage from "../components/EmployersPageComponents/EmployersPage";
import TransitionBox from "./TransitionBox";
import useTitle from "../components/useTitle";

const Employers = () => {
  useTitle("Find Qualified Candidates Easily");
  return (
    <TransitionBox>
      <EmployersPage />
    </TransitionBox>
  );
};

export default Employers;
