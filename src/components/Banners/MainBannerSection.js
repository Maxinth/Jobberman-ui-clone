import React, { useState } from "react";
import { BannerMain } from "./banner.elements";
import BannerContainer from "./BannerContainer";
import PropTypes from "prop-types";
import MainBannerForm from "./MainBannerForm";
import { useJobs } from "./useJobs";

const MainBannerSection = (props) => {
  const { onChange, selectBoxList } = useJobs();

  return (
    <BannerMain>
      <BannerContainer {...props} />
      <MainBannerForm selectBoxList={selectBoxList} onChange={onChange} />
    </BannerMain>
  );
};

MainBannerSection.propTypes = {
  lgImg: PropTypes.string,
  smImg: PropTypes.string,
  mainText: PropTypes.string,
};

export default MainBannerSection;

/*

jobId, industryId and locationId have been named to match the properties of the choice object - so the onChange function can be reused
  across <SelectBox /> components

*/
