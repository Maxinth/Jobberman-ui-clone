import { useState } from "react";
import { data } from "./data";
import { FilterJobsByInput } from "./jobFilters";

const useJobFilter = () => {
  const [jobs, setJobs] = useState(data);

  const resetToInitialData = () => setJobs(data);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    FilterJobsByInput(parameters, jobs, setJobs);
  };

  return { jobs, handleSearch, resetToInitialData };
};

export default useJobFilter;
