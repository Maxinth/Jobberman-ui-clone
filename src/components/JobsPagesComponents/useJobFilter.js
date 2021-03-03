import { useState } from "react";
import { data } from "./data";
import { filterConditions } from "./filterConditions";

const useJobFilter = () => {
  const [jobs, setJobs] = useState(data);
  const [filterParameters, setFilterParameters] = useState([]);

  const resetToInitialData = () => setJobs(data);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    setFilterParameters(parameters);

    const moduleFilterInput = parameters[0];
    const industryFilterInput = parameters[1];
    const locationFilterInput = parameters[2];

    const {
      onlyModuleChanged,
      onlyLocationChanged,
      onlyIndustryChanged,
    } = filterConditions(
      moduleFilterInput,
      industryFilterInput,
      locationFilterInput
    );

    // spread out jobs into a new array - don't directly mutate jobs!
    const newJobs = [...jobs];

    const jobsByModuleOnly = newJobs.filter((job) => {
      // console.log("search by sector only");
      if (moduleFilterInput.id === "jobs") {
        return moduleFilterInput.choice === job.itemValue;
      }
      console.log("Not filtering by module ONLY just yet");
      return null;
    });

    const jobsByLocationOnly = newJobs.filter((job) => {
      // console.log("search by location only");
      if (locationFilterInput.id === "locations") {
        return locationFilterInput.choice === job.location;
      }
      console.log("Not filtering by location ONLY just yet");
      return null;
    });

    const jobsByIndustryOnly = newJobs.filter((job) => {
      // console.log("search by location only");
      if (industryFilterInput.id === "industries") {
        return industryFilterInput.choice === job.industry;
      }
      console.log("Not filtering by industries  ONLY just yet");
      return null;
    });

    if (onlyModuleChanged) {
      setJobs(jobsByModuleOnly);
    } else if (onlyLocationChanged) {
      setJobs(jobsByLocationOnly);
    } else if (onlyIndustryChanged) {
      setJobs(jobsByIndustryOnly);
    }
  };

  return { jobs, handleSearch, resetToInitialData };
};

export default useJobFilter;
