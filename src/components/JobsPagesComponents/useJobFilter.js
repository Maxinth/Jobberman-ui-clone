import { useState } from "react";
import { data } from "./data";

const useJobFilter = () => {
  const [jobs, setJobs] = useState(data);
  const [filterParameters, setFilterParameters] = useState([]);

  const moduleFilterInput = filterParameters[0];
  const industryFilterInput = filterParameters[1];
  const locationFilterInput = filterParameters[2];

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    setFilterParameters(parameters);

    // spread out jobs into a new array - don't directly mutate jobs!
    const newJobs = [...jobs];
    const jobsByModuleOnly = newJobs.filter((job) => {
      // console.log("search by sector only");
      if (moduleFilterInput.id === "jobs") {
        return moduleFilterInput.choice === job.itemValue;
      }
      console.log("Not filtering by module ONLY just yet");
    });

    const jobsByLocationOnly = newJobs.filter((job) => {
      // console.log("search by location only");
      if (locationFilterInput.id === "locations") {
        return locationFilterInput.choice === job.location;
      }
      console.log("Not filtering by location ONLY just yet");
    });

    const jobsByIndustryOnly = newJobs.filter((job) => {
      // console.log("search by location only");
      if (industryFilterInput.id === "industries") {
        return industryFilterInput.choice === job.itemValue;
      }
      console.log("Not filtering by industries  ONLY just yet");
    });

    if (
      moduleFilterInput.choice !== "allJobs" &&
      industryFilterInput.choice === "allIndustries" &&
      locationFilterInput.choice === "allLocations"
    ) {
      setJobs(jobsByModuleOnly);
    }
  };

  return { jobs, handleSearch };
};

export default useJobFilter;
