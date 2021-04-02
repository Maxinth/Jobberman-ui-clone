import { useState, useEffect } from "react";
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
  const [jobsNo] = useState(jobs.length);
  const resetToInitialData = () => setJobs(data[pageNo]);

  // STATES IN QUESTION TO GET MATCHING JOBS COUNT - START FROM HERE
  const [count, setCount] = useState(data[pageNo].length);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    FilterJobsByInput(parameters, jobs, setJobs, setCount);
  };

  useEffect(() => {
    setCount(count);
  }, [count]);

  return {
    jobs,
    handleSearch,
    resetToInitialData,
    changePage,
    pageNo,
    data,
    count,
    jobsNo,
  };
};

export default useJobFilter;
