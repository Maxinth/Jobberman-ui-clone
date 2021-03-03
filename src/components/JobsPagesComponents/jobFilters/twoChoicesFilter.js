export const twoChoicesFilter = (
  jobsByModuleOnly,
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

  return { jobsByModuleAndIndustry, jobsByModuleAndLocation };
};
