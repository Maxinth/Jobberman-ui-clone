import StarIcon from "@material-ui/icons/Star";
import EcoIcon from "@material-ui/icons/Eco";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
export const data = {
  featuredJobs: {
    title: "Featured Jobs",
    icon: <StarIcon />,
    iconColor: "red",
    jobs: [
      {
        jobTitle: "Product and Marketing Specialist",
        company: "Anonymous",
        place: "Enugu",
        jobType: "Full Time",
        jobSector: "Marketing & Communication",
        duration: "5d",
      },
      {
        jobTitle: "SEO Specialist",
        company: "PleromaGate Tech",
        place: "lagos",
        jobType: "Full Time",
        jobSector: "Software & Data",
        duration: "1w",
      },
      {
        jobTitle: "Insurance Advisor",
        company: "Leadway Assurance LTD",
        place: "lagos",
        jobType: "Full Time",
        jobSector: "Accounting, Auditing & Finance",
        duration: "3d",
      },
    ],
  },
};
