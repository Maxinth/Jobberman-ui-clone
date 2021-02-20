import React from "react";
import { navLinks } from "./data";
import ContactNavLink from "./ContactNavLink";

const GenerateContactNavLinks = () => {
  return (
    <>
      {navLinks.map((item) => (
        <ContactNavLink item={item} key={item} />
      ))}
    </>
  );
};

export default GenerateContactNavLinks;
