import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
// import

const Navbar = () => {
  return (
    <nav className="nav">
      <header className="nav__header">
        <div className="nav__left">
          <MenuIcon className="nav__menuIcon" />
          <img src={logo} alt="jobberman logo" className="nav__logo" />
        </div>

        {/* hidden on small and mobile-screens */}
        <div className="nav__right">
          <span className="nav__linkContainer">
            <Link to="/" className="nav__link">
              log in
            </Link>
          </span>
          <span className="nav__linkContainer">
            <Link to="/" className="nav__link">
              sign up
            </Link>
          </span>
          <button className="nav__btn">
            <Link to="/" className="nav__link">
              post a free job
            </Link>
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
