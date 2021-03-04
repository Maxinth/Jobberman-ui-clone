import { useState } from "react";
import { data } from "./data";
import { FilterJobsByInput } from "./jobFilters";

const useJobFilter = () => {
  //state to manage job page - when mocking pagination
  const [pageNo, setPageNo] = useState(0);
  const changePage = (n) => {
    setPageNo(n);
    setJobs(data[n]); // show array data whose index matches pageNo
    console.log("pageNo inside changePage = ", pageNo);
  };

  // state to determine the array of joblists in view based on page.
  const [jobs, setJobs] = useState(data[pageNo]);

  const resetToInitialData = () => setJobs(data[pageNo]);
  // console.log(data[0]);
  // console.log(data[1]);

  const handleSearch = (e, parameters) => {
    e.preventDefault();
    FilterJobsByInput(parameters, jobs, setJobs);
  };

  return { jobs, handleSearch, resetToInitialData, changePage, pageNo, data };
};

export default useJobFilter;
