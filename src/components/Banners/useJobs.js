import { data } from "./formSelectData";
import { useState } from "react";

export const useJobs = () => {
  // destructuring individual object items from data object
  const { jobFunctions, jobIndustries, jobLocations } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming
  const { jobId, jobItems } = jobFunctions;
  const { industryId, industryItems } = jobIndustries;
  const { locationId, locationItems } = jobLocations;

  // values at initial load
  const initialValues = {
    jobs: jobItems[0].itemValue,
    industries: industryItems[0].itemValue,
    locations: locationItems[0].itemValue,
  };

  const [choice, setChoice] = useState(initialValues);

  const { jobs, industries, locations } = choice;

  // custom function to handle select option changes
  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  // reset to initial values
  const resetChoicesValues = () => {
    setChoice(initialValues);
  };

  // data for selectBoxes
  const selectBoxList = [
    { items: jobItems, currentChoice: jobs, id: jobId },
    { items: industryItems, currentChoice: industries, id: industryId },
    { items: locationItems, currentChoice: locations, id: locationId },
  ];

  // An array of the items selected to be used as identifiers to be filtered from global jobs data
  const filterParameters = selectBoxList.map((item) => {
    return { id: item.id, choice: item.currentChoice };
  });

  return {
    selectBoxList,
    onChange,
    resetChoicesValues,
    choice,
    initialValues,
    filterParameters,
  };
};

/*
custom hook for the MainBannerSection exporting needed items
*/
