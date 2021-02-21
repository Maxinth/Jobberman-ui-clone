import React from "react";
import { navLinks } from "./data";
import ContactNavLink from "./ContactNavLink";

const GenerateContactNavLinks = (props) => {
  return (
    <>
      {navLinks.map((item, index) => (
        <ContactNavLink item={item} key={item} index={index} {...props} />
      ))}
    </>
  );
};

export default GenerateContactNavLinks;
