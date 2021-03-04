import { useState } from "react";
import { data } from "./data";
import { FilterJobsByInput } from "./jobFilters";

const useJobFilter = () => {
  //state to manage job page - when mocking pagination
  const [pageNo, setPageNo] = useState(0);
  const changePage = (n) => setPageNo(n);

  // state to determine the array of joblists in view based on page.
  const [jobs, setJobs] = useState(data[pageNo]);
  const resetToInitialData = () => setJobs(data[pageNo]);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    FilterJobsByInput(parameters, jobs, setJobs);
  };

  return { jobs, handleSearch, resetToInitialData, changePage };
};

export default useJobFilter;
