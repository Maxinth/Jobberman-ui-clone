import styled from "styled-components";
import { global } from "../../globalStyles";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  max-width: 1400px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 1px 1px 9px grey;
`;

const NavHeader = styled.header`
  padding: 0.8rem 1rem;

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavRight = styled.div`
  display: none;
  transition: opacity 0.3s;

  @media (min-width: 700px) {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    opacity: 1;
  }
`;

const NavBackDrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  cursor: pointer;
`;

const LinkContainer = styled.span``;

const NavRightLink = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  color: ${global.mainOrange};
  font-size: calc(0.8rem + 0.2vw);
  font-weight: 700;
  transition: font-size 0.3s ease-in-out;
`;

const NavBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;

  ${NavRightLink} {
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    background-color: var(--main-orange);
    padding: 0.8rem 2rem;
    font-weight: 700;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export {
  Nav,
  NavHeader,
  NavRight,
  NavBackDrop,
  NavRightLink,
  LinkContainer,
  NavBtn,
};
