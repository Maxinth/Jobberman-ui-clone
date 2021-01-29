import React, { useState } from "react";
import bannerImg from "../../assets/jobseeker-hero-bold.png";
import bannerImg2 from "../../assets/jobseeker-hero2.png";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link } from "react-router-dom";
import SelectBox from "./FormSelect";

import { data } from "./formSelectData";
const MainBannerSection = () => {
  const { jobFunctions } = data;
  const { jobId, jobItems } = jobFunctions;

  const [choice, setChoice] = useState({
    jobs: jobItems[0].itemValue,
    industries: "",
    locations: "",
  });

  const { jobs, industries, locations } = choice;

  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="mainBanner__main">
      <div className="mainBanner__container">
        {/* show on small screens */}
        <img src={bannerImg} alt="banner" className="mainBanner__img" />
        {/* show on small screens */}
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
        </section>{" "}
        {/*END  mainBanner__bottom */}
        {/* <section className="mainBanner__form"> */}
        {/* </section> */}
      </div>
      <section className="mainBanner__formContainer">
        <form className="mainBanner__form">
          <SelectBox
            items={jobItems}
            currentChoice={jobs}
            onChange={onChange}
            id={jobId}
          />
        </form>
      </section>
    </section>
  );
};

export default MainBannerSection;
