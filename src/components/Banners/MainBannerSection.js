import React, { useState } from "react";
import SelectBox from "./FormSelect";
import { BannerMain, FormContainer, BannerForm } from "./banner.elements";
import { data } from "./formSelectData";
import BannerContainer from "./BannerContainer";
import PropTypes from "prop-types";

const MainBannerSection = (props) => {
  // destructuring individual object items from data object
  const { jobFunctions, jobIndustries, jobLocations } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming
  const { jobId, jobItems } = jobFunctions;
  const { industryId, industryItems } = jobIndustries;
  const { locationId, locationItems } = jobLocations;

  const [choice, setChoice] = useState({
    jobs: jobItems[0].itemValue,
    industries: industryItems[0].itemValue,
    locations: locationItems[0].itemValue,
  });

  const { jobs, industries, locations } = choice;

  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  const selectBoxList = [
    { items: jobItems, currentChoice: jobs, id: jobId },
    { items: industryItems, currentChoice: industries, id: industryId },
    { items: locationItems, currentChoice: locations, id: locationId },
  ];
  return (
    <BannerMain>
      <BannerContainer {...props} />

      <FormContainer>
        <BannerForm>
          {selectBoxList.map((item) => {
            const { items, currentChoice, id } = item;
            return (
              <SelectBox
                key={id}
                items={items}
                currentChoice={currentChoice}
                onChange={onChange}
                id={id}
                choice={choice}
              />
            );
          })}
        </BannerForm>
      </FormContainer>
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
