export const filterConditions = (
  moduleFilterInput,
  industryFilterInput,
  locationFilterInput
) => {
  // various condtions for filter
  const onlyModuleChanged =
    moduleFilterInput.choice !== "allJobs" &&
    industryFilterInput.choice === "allIndustries" &&
    locationFilterInput.choice === "allLocations";

  // only Industry changed
  const onlyIndustryChanged =
    moduleFilterInput.choice === "allJobs" &&
    industryFilterInput.choice !== "allIndustries" &&
    locationFilterInput.choice === "allLocations";

  const onlyLocationChanged =
    moduleFilterInput.choice === "allJobs" &&
    industryFilterInput.choice === "allIndustries" &&
    locationFilterInput.choice !== "allLocations";

  return { onlyModuleChanged, onlyIndustryChanged, onlyLocationChanged };
};
