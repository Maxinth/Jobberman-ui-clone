import { getInputs, oneChoiceFilter, multipleChoicesFilter } from "./index";
import { filterConditions } from "../filterConditions";

export const FilterJobsByInput = (parameters, jobs, setJobs, setCount) => {
  const { inputs } = getInputs(parameters);

  const {
    onlyModuleChanged,
    onlyLocationChanged,
    onlyIndustryChanged,
    bothModuleAndIndustry,
    bothModuleAndLocation,
    bothIndustryAndLocation,
    checkAll,
  } = filterConditions(...inputs);

  // spread out jobs into a new array - don't directly mutate jobs!
  const newJobs = [...jobs];

  const {
    jobsByIndustryOnly,
    jobsByLocationOnly,
    jobsByModuleOnly,
  } = oneChoiceFilter(newJobs, ...inputs);

  const {
    jobsByModuleAndIndustry,
    jobsByModuleAndLocation,
    jobsByLocationAndIndustry,
    fullOptions,
  } = multipleChoicesFilter(jobsByModuleOnly, jobsByLocationOnly, ...inputs);

  const matchJobsAndCount = (match) => {
    setJobs(match);
    console.log("no of matching jobs = ", match.length);
    setCount(match.length);
  };
  // section to determine filtered jobs
  if (onlyModuleChanged) {
    matchJobsAndCount(jobsByModuleOnly);
  } else if (onlyLocationChanged) {
    matchJobsAndCount(jobsByLocationOnly);
  } else if (onlyIndustryChanged) {
    matchJobsAndCount(jobsByIndustryOnly);
  } else if (bothModuleAndIndustry) {
    matchJobsAndCount(jobsByModuleAndIndustry);
  } else if (bothModuleAndLocation) {
    matchJobsAndCount(jobsByModuleAndLocation);
  } else if (bothIndustryAndLocation) {
    matchJobsAndCount(jobsByLocationAndIndustry);
  } else if (checkAll) {
    matchJobsAndCount(fullOptions);
  } else {
    matchJobsAndCount(jobs);
  }
};
