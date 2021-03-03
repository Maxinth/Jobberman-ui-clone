export const filterConditions = (
  moduleFilterInput,
  industryFilterInput,
  locationFilterInput
) => {
  // various condtions for filter

  // destructuring choice and giving it a different alias depending on the input
  const { choice: moduleChoice } = moduleFilterInput;
  const { choice: industryChoice } = industryFilterInput;
  const { choice: locationChoice } = locationFilterInput;

  const onlyModuleChanged =
    moduleChoice !== "allJobs" &&
    industryChoice === "allIndustries" &&
    locationChoice === "allLocations";

  // only Industry changed
  const onlyIndustryChanged =
    moduleChoice === "allJobs" &&
    industryChoice !== "allIndustries" &&
    locationChoice === "allLocations";

  const onlyLocationChanged =
    moduleChoice === "allJobs" &&
    industryChoice === "allIndustries" &&
    locationChoice !== "allLocations";

  const bothModuleAndIndustry =
    moduleChoice !== "allJobs" &&
    industryChoice !== "allIndustries" &&
    locationChoice === "allLocations";

  const bothModuleAndLocation =
    moduleChoice !== "allJobs" &&
    industryChoice === "allIndustries" &&
    locationChoice !== "allLocations";

  const bothIndustryAndLocation =
    moduleChoice === "allJobs" &&
    industryChoice !== "allIndustries" &&
    locationChoice !== "allLocations";

  const checkAll =
    moduleChoice !== "allJobs" &&
    industryChoice !== "allIndustries" &&
    locationChoice !== "allLocations";

  return {
    onlyModuleChanged,
    onlyIndustryChanged,
    onlyLocationChanged,
    bothModuleAndIndustry,
    bothModuleAndLocation,
    bothIndustryAndLocation,
    checkAll,
  };
};
