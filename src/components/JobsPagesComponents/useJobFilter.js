import { useState } from "react";
import { data } from "./data";
import { FilterJobsByInput } from "./jobFilters";

const useJobFilter = () => {
  //state to manage job page - when mocking pagination
  const [pageNo, setPageNo] = useState(0);

  // custom function to change jobs list to imitate navigating to another job page via pagination.
  const changePage = (n) => {
    setPageNo(n);
    setJobs(data[n]); // show array data whose index matches pageNo
  };

  // state to determine the array of jobs lists in view based on page.
  const [jobs, setJobs] = useState(data[pageNo]);

  const resetToInitialData = () => setJobs(data[pageNo]);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    FilterJobsByInput(parameters, jobs, setJobs);
  };

  return {
    jobs,
    handleSearch,
    resetToInitialData,
    changePage,
    pageNo,
    data,
  };
};

export default useJobFilter;
