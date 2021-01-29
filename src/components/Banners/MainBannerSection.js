import React, { useState } from "react";
import bannerImg from "../../assets/jobseeker-hero-bold.png";
import bannerImg2 from "../../assets/jobseeker-hero2.png";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link } from "react-router-dom";
import SelectBox from "./FormSelect";

import { data } from "./formSelectData";
const MainBannerSection = () => {
  // destructure individual object items from data object
  const { jobFunctions, jobIndustries } = data;

  // destructuring needed properties from the objects from 12
  const { jobId, jobItems } = jobFunctions;
  const { industryId, industryItems } = jobIndustries;

  const [choice, setChoice] = useState({
    jobs: jobItems[0].itemValue,
    industries: industryItems[0].itemValue,
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
          <SelectBox
            items={industryItems}
            currentChoice={industries}
            onChange={onChange}
            id={industryId}
          />
        </form>
      </section>
    </section>
  );
};

export default MainBannerSection;
