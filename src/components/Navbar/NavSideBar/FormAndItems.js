import React from "react";
import { NavSection } from "./navSideBar.elements";
import NavSideBarForm from "./NavSideBarForm";
import GenerateSideBarMain from "./GenerateSideBarMain";

const FormAndItems = () => {
  return (
    <NavSection>
      <NavSideBarForm />
      <GenerateSideBarMain />
    </NavSection>
  );
};

export default FormAndItems;
