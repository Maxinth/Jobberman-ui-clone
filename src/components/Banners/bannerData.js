import bannerImg from "../../assets/jobseeker-hero-bold.png";
import bannerImg2 from "../../assets/jobseeker-hero2.png";

const bannerData = {
  mainHeading: `We will boost your skills and profile, provide you with personalised
        career guidance and match you with the right opportunities, so that you
        can be the Best and the Brightest.`,
  smallScreenImg: bannerImg,
  largerScreenImg: bannerImg2,
};

const { mainHeading, smallScreenImg, largerScreenImg } = bannerData;

// custom function to change btn text of banner button in the MockVideoSection component based on path.
const renderByLocation = (location) => {
  return location.pathname === "/employer"
    ? "Contact Our Solutions Team"
    : "Join Now!";
};

export { mainHeading, smallScreenImg, largerScreenImg, renderByLocation };
