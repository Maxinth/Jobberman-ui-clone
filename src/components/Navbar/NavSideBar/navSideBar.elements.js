import { Link } from "react-router-dom";
import styled from "styled-components";
import { global } from "../../../globalStyles";

const NavSideBarContainer = styled.section`
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  background-color: rgb(255, 255, 255);
  transition: transform 0.2s ease-in-out, width 0.3s ease-in;
  z-index: 300;
  --border: 1px solid rgb(231, 228, 228);
  overflow: auto;
  transform: ${(props) =>
    props.state ? `translateX(0%)` : `translateX(-100%)`};

  @media (min-width: 640px) {
    width: 360px;
  }
`;

// NavLeft
const NavLeftContainer = styled.section`
  > svg > svg {
    font-size: 1.8rem !important;

    color: rgb(78, 85, 89);
  }
`;

const NavLogo = styled.img`
  object-fit: contain;
  width: 150px;
  display: block;
  transition: width 0.3s ease-in-out;
`;

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
const SideBarListContainer = styled.ul`
  padding: 0.9rem 2.1rem;
`;

const SideBarListItem = styled.li`
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;

  &:hover a {
    font-weight: 900;
  }
`;

const SideBarForm = styled.form`
  display: flex;
  align-items: center;
  border: var(--border);
  border-radius: 5px;
  margin: 0.9rem 1.2rem;
`;

const SideBarInput = styled.input`
  flex: 1;
  padding: 0.6rem 1rem;
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-family: "Open Sans", sans-serif;
`;

const SearchIconContainer = styled.span`
  border-left: 1px solid rgb(231, 228, 228);
  display: inline-block;
  height: 100%;

  > svg {
    padding: 0.2rem 0;
    font-size: 2rem !important;
    color: grey;
  }
`;

const SideBarMain = styled.section`
  margin-top: ${(prop) => (prop.fromTop ? `${prop.fromTop}rem` : "unset")};
  width: 100%;
  border-bottom: var(--border);
  padding-bottom: 0.5rem;
  margin-bottom: ${(prop) =>
    prop.fromBottom ? `${prop.fromBottom}rem` : "unset"};
`;

const SideBarLink = styled(Link)`
  color: ${(props) => (props.item ? global.mainOrange : `rgb(78, 85, 89)`)};
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem;
  font-weight: 600;
  transition: font-weight 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkIconContainer = styled.span`
  > svg {
    color: rgb(10, 153, 10);
    font-size: 3rem !important;
  }
`;

export {
  SideBarListContainer,
  SideBarListItem,
  SideBarLink,
  LinkIconContainer,
  NavSideBarContainer,
  NavLogo,
  NavLeftContainer,
  Container,
  SideBarForm,
  SideBarInput,
  SearchIconContainer,
  SideBarMain,
};
