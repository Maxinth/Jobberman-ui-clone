import React from "react";
import EmployersPage from "../components/EmployersPageComponents/EmployersPage";
import TransitionBox from "./TransitionBox";

const Employers = () => {
  return (
    <TransitionBox>
      <EmployersPage />
    </TransitionBox>
  );
};

export default Employers;
