export const data = [
  "finance",
  "IT & Software",
  "admin & office",
  "marketing & Comms",
  "human resources",
  "customer service & support",
  "product & project management",
  "engineering & technology",
  "transport & logistics",
  "supply chain & procurement",
  "sales",
  "management & business development",
  "And more",
];

export const productTexts = [
  `You decrease the time spent on sorting through the huge volume of
  applications from jobseekers. You can sort through job seekers based
   on test scores they achieve`,

  `An assessment will not only help you identify candidates that will be
   a good fit for jobs at your company, but it will also help predict a
   new hire’s on-the-job performance. It Introduces an element of
   objectivity into the hiring process by providing standardised results
   that can be applied to all your applicants.`,
];

const assessJobSeekersData = {
  mainTexts: ["Assess Your", "JobSeekers"],
  pricingTexts: ["NGN 54,000", "NGN 48,600", "Per listing"],
};

const { mainTexts, pricingTexts } = assessJobSeekersData;

// custom function to color list item icons based on the index of the parent card
const colorIconByCardIndex = (index) => {
  return index === 1;
};

export { mainTexts, pricingTexts, colorIconByCardIndex };
