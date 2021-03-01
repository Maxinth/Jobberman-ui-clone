const data = {
  // first section
  mainSection: [
    { linkText: "find a job", goTo: "/jobs" },
    { linkText: "job seekers", goTo: "/job-seeker" },
    { linkText: "employers", goTo: "/employer" },
    { linkText: "soft skills training", goTo: "/soft-skills" },
    { linkText: "career center", goTo: "/blog" },
    { linkText: "youth engagement", goTo: "/youth-engagement" },
    { linkText: "professional cv services", goTo: "/cv-services" },
    { linkText: "skill assessments", goTo: "/skill-assessments" },
    { linkText: "contact us", goTo: "/contact-us" },
  ],
  // second section
  sign: [
    { linkText: "log in", goTo: "/login" },
    { linkText: "sign up", goTo: "/sign-up" },
  ],
  // final section
  post: [{ linkText: "post a free job", goTo: "/login" }],
};

// destructuring properties to be used in creating the sidebarItems array
const { mainSection, sign, post } = data;

// data for the GenerateSideBarMain component
export const sidebarItems = [
  { section: mainSection, offset: 1 },
  { section: sign, offset: 0.5 },
  { section: post, offset: 5 },
];

// custom function to conditionally style links based on its value.
export const styleLink = (id) => {
  let linkClass;
  // setting the class based on linkText value
  switch (id) {
    case "find a job":
    case "soft skills training":
    case "skill assessments":
    case "log in":
    case "sign up":
    case "post a free job":
      linkClass = "main";
      break;
    default:
      linkClass = "";
      break;
  }
  return linkClass;
};
