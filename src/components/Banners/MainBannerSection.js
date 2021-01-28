import React from "react";
import bannerImg from "../../assets/jobseeker-hero-bold.png";
import bannerImg2 from "../../assets/jobseeker-hero2.png";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link } from "react-router-dom";
const MainBannerSection = () => {
  return (
    <section className="mainBanner__main lg">
      <div className="mainBanner__container">
        <img src={bannerImg} alt="banner" className="mainBanner__img" />
        <img src={bannerImg2} alt="banner" className="mainBanner__img lg" />
        <section className="mainBanner__bottom">
          <h3 className="mainBanner__heading">
            We will boost your skills and profile, provide you with personalised
            career guidance and match you with the right opportunities, so that
            you can be the Best and the Brightest.
          </h3>
          <section className="mainBanner__videoContainer">
            <div className="mainBanner__video">
              <PlayCircleOutlineOutlinedIcon className="mainBanner__videoIcon" />
              <span className="mainBanner__text">Watch the Video</span>
            </div>
            <button className="mainBanner__btn">
              <Link className="mainBanner__link" to="/sign-up">
                Join Now!
              </Link>
            </button>
          </section>
        </section>
      </div>
    </section>
  );
};

export default MainBannerSection;
