import React from "react";
import { LinkContainer, NavRightLink as NavLink } from "./nav.elements";
import { data } from "./data";

const GenerateNavLinks = () => {
  return (
    <>
      {data.map(({ linkText, path }) => (
        <LinkContainer key={linkText}>
          <NavLink to={`/${path}`}>{linkText}</NavLink>
        </LinkContainer>
      ))}
    </>
  );
};

export default GenerateNavLinks;
