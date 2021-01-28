import { Link } from "react-router-dom";
import "./smallBanner.css";
const SmallBanner = () => {
  return (
    <section className="smallBanner">
      <section className="smallBanner__container">
        <span className="smallBanner__text">Seize Your Next Opportunity!</span>
        <span className="smallBanner__text">
          Top companies on Jobberman are looking for you
        </span>
        <Link className="smallBanner__link" to="/">
          Get Started Today
        </Link>
      </section>
    </section>
  );
};

export default SmallBanner;
