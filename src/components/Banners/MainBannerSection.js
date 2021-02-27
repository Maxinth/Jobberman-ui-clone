import React from "react";
import { BannerMain } from "./banner.elements";
import BannerContainer from "./BannerContainer";
import PropTypes from "prop-types";
import FormMain from "./FormMain";

const MainBannerSection = (props) => {
  return (
    <BannerMain>
      <BannerContainer {...props} />
      <FormMain />
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
