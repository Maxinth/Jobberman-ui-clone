import React from "react";
import NavLeft from "../NavLeft";
import { useGlobalContext } from "../../context";
import { data } from "./data";
import GenerateSideBarList from "./GenerateSideBarList";
import NavSideBarForm from "./NavSideBarForm";
import {
  NavSideBarContainer,
  NavSection,
  Container,
  SideBarMain,
} from "./navSideBar.elements";
const NavSideBar = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();

  const { mainSection, sign, post } = data;
  return (
    <NavSideBarContainer state={isSideBarOpen}>
      <NavSection pad={true}>
        <NavLeft toggleSideBar={toggleSideBar} />
      </NavSection>
      <Container>
        <NavSection>
          <NavSideBarForm />

          <SideBarMain fromTop={1}>
            <GenerateSideBarList items={mainSection} />
          </SideBarMain>

          <SideBarMain fromTop={0.5}>
            <GenerateSideBarList items={sign} />
          </SideBarMain>

          <SideBarMain fromBottom={5}>
            <GenerateSideBarList items={post} />
          </SideBarMain>
        </NavSection>
      </Container>
    </NavSideBarContainer>
  );
};

export default NavSideBar;
