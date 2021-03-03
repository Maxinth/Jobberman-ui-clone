import { useState } from "react";
import { data } from "./data";
import { filterConditions } from "./filterConditions";
import { oneChoiceFilter, getInputs, twoChoicesFilter } from "./jobFilters";

const useJobFilter = () => {
  const [jobs, setJobs] = useState(data);
  const [filterParameters, setFilterParameters] = useState([]);

  const resetToInitialData = () => setJobs(data);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    setFilterParameters(parameters);

    const {
      inputs,
      moduleFilterInput,
      industryFilterInput,
      locationFilterInput,
    } = getInputs(parameters);

    const {
      onlyModuleChanged,
      onlyLocationChanged,
      onlyIndustryChanged,
      bothModuleAndIndustry,
      bothModuleAndLocation,
      bothIndustryAndLocation,
    } = filterConditions(...inputs);

    // spread out jobs into a new array - don't directly mutate jobs!
    const newJobs = [...jobs];
    const {
      jobsByIndustryOnly,
      jobsByLocationOnly,
      jobsByModuleOnly,
    } = oneChoiceFilter(newJobs, ...inputs);

    const { jobsByModuleAndIndustry } = twoChoicesFilter(
      jobsByModuleOnly,
      ...inputs
    );

    if (onlyModuleChanged) {
      setJobs(jobsByModuleOnly);
    } else if (onlyLocationChanged) {
      setJobs(jobsByLocationOnly);
    } else if (onlyIndustryChanged) {
      setJobs(jobsByIndustryOnly);
    } else if (bothModuleAndIndustry) {
      setJobs(jobsByModuleAndIndustry);
    }

    console.log(jobs);
  };

  return { jobs, handleSearch, resetToInitialData };
};

export default useJobFilter;
