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

// custom function to determine if data from props or data supplied directly get used in the MainBannerImg and BannerBottom components
const checkAndUse = (importedData, propsData) => {
  return propsData ? propsData : importedData;
};

export { mainHeading, smallScreenImg, largerScreenImg, checkAndUse };
