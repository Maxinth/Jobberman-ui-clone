import React, { useState } from "react";
import SelectBox from "./FormSelect";
import { BannerMain, FormContainer, BannerForm } from "./banner.elements";
import { data } from "./formSelectData";
import BannerContainer from "./BannerContainer";
const MainBannerSection = () => {
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

  return (
    <BannerMain>
      <BannerContainer />

      <FormContainer>
        <BannerForm>
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
          <SelectBox
            items={locationItems}
            currentChoice={locations}
            onChange={onChange}
            id={locationId}
          />
        </BannerForm>
      </FormContainer>
    </BannerMain>
  );
};

export default MainBannerSection;

/*

jobId, industryId and locationId have been named to match the properties of the choice object - so the onChange function can be reused
  across <SelectBox /> components

*/
