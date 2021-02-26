import React from "react";
import DropChildFromTop from "../../DropFromTop";
import EmployerBanner from "./EmployerBanner";

const EmployersMainBanner = () => {
  return (
    <DropChildFromTop>
      <EmployerBanner />
    </DropChildFromTop>
  );
};

export default EmployersMainBanner;
