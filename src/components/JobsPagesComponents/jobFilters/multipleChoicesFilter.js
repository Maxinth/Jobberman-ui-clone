export const multipleChoicesFilter = (
  jobsByModuleOnly,
  jobsByLocationOnly,
  moduleFilterInput,
  industryFilterInput,
  locationFilterInput
) => {
  // filter by module and industry
  const jobsByModuleAndIndustry = jobsByModuleOnly.filter((job) => {
    return job.industry === industryFilterInput.choice;
  });

  // filtering by module and location
  const jobsByModuleAndLocation = jobsByModuleOnly.filter((job) => {
    return job.location === locationFilterInput.choice;
  });

  // filtering by location and industry only
  const jobsByLocationAndIndustry = jobsByLocationOnly.filter((job) => {
    return job.industry === industryFilterInput.choice;
  });

  // filtering by location AND industry AND THEN BY MODULE
  const fullOptions = jobsByLocationAndIndustry.filter((job) => {
    return job.itemValue === moduleFilterInput.choice;
  });

  return {
    jobsByModuleAndIndustry,
    jobsByModuleAndLocation,
    jobsByLocationAndIndustry,
    fullOptions,
  };
};
