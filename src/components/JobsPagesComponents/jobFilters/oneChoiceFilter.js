export const oneChoiceFilter = (
  newJobs,
  moduleFilterInput,
  industryFilterInput,
  locationFilterInput
) => {
  const jobsByModuleOnly = newJobs.filter((job) => {
    // console.log("search by sector only");
    if (moduleFilterInput.id === "jobs") {
      return moduleFilterInput.choice === job.itemValue;
    }
    console.log("Not filtering by module ONLY just yet");
    return null;
  });

  const jobsByLocationOnly = newJobs.filter((job) => {
    // console.log("search by location only");
    if (locationFilterInput.id === "locations") {
      return locationFilterInput.choice === job.location;
    }
    console.log("Not filtering by location ONLY just yet");
    return null;
  });

  const jobsByIndustryOnly = newJobs.filter((job) => {
    // console.log("search by location only");
    if (industryFilterInput.id === "industries") {
      return industryFilterInput.choice === job.industry;
    }
    console.log("Not filtering by industries  ONLY just yet");
    return null;
  });

  return { jobsByModuleOnly, jobsByLocationOnly, jobsByIndustryOnly };
};
