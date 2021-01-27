import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <header className="nav__header">
        <div className="nav__left">
          <MenuIcon className="nav__menuIcon" />
          <img src={logo} alt="jobberman logo" className="nav__logo" />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
