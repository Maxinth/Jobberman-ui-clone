import { getInputs, oneChoiceFilter, multipleChoicesFilter } from "./index";
import { filterConditions } from "../filterConditions";

export const FilterJobsByInput = (parameters, jobs, setJobs) => {
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

  // section to determine filtered jobs
  if (onlyModuleChanged) {
    setJobs(jobsByModuleOnly);
  } else if (onlyLocationChanged) {
    setJobs(jobsByLocationOnly);
  } else if (onlyIndustryChanged) {
    setJobs(jobsByIndustryOnly);
  } else if (bothModuleAndIndustry) {
    setJobs(jobsByModuleAndIndustry);
  } else if (bothModuleAndLocation) {
    setJobs(jobsByModuleAndLocation);
  } else if (bothIndustryAndLocation) {
    setJobs(jobsByLocationAndIndustry);
  } else if (checkAll) {
    setJobs(fullOptions);
  }
};
