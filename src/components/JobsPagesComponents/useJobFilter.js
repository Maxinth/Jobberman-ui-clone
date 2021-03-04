import { useState } from "react";
import { data } from "./data";
import { FilterJobsByInput } from "./jobFilters";

const useJobFilter = () => {
  // const [jobs, setJobs] = useState(data);
  const [jobs, setJobs] = useState(data[0]);

  const resetToInitialData = () => setJobs(data[0]);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    FilterJobsByInput(parameters, jobs, setJobs);
  };

  return { jobs, handleSearch, resetToInitialData };
};

export default useJobFilter;
