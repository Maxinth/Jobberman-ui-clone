import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { useGlobalContext } from "../context";

const NavLeft = () => {
  const { toggleSideBar } = useGlobalContext();
  return (
    <div className="nav__left">
      <button className="nav__menuIconContainer">
        <MenuIcon className="nav__menuIcon" onClick={toggleSideBar} />
      </button>
      <img src={logo} alt="jobberman logo" className="nav__logo" />
    </div>
  );
};

export default NavLeft;
