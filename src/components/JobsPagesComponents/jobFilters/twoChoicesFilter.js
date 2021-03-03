export const twoChoicesFilter = (
  jobsByModuleOnly,
  jobsByLocationOnly,
  moduleFilterInput,
  industryFilterInput,
  locationFilterInput
) => {
  // filter by module and industry
  const jobsByModuleAndIndustry = jobsByModuleOnly.filter((job) => {
    // console.log(job);
    // console.log(industryFilterInput);
    // console.log(moduleFilterInput);
    // console.log(job.industry === industryFilterInput.choice);
    return job.industry === industryFilterInput.choice;
  });

  // filtering by module and location
  const jobsByModuleAndLocation = jobsByModuleOnly.filter((job) => {
    return job.location === locationFilterInput.choice;
  });

  const jobsByLocationAndIndustry = jobsByLocationOnly.filter((job) => {
    return job.industry === industryFilterInput.choice;
  });

  return {
    jobsByModuleAndIndustry,
    jobsByModuleAndLocation,
    jobsByLocationAndIndustry,
  };
};
