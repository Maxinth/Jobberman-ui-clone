import StarIcon from "@material-ui/icons/Star";
import EcoIcon from "@material-ui/icons/Eco";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import React from "react";

export const data = {
  featuredJobs: {
    title: "Featured Jobs",
    icon: <StarIcon />,
    iconColor: "rgb(213, 44, 61)",
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

  // newly added jobs

  newlyAddedJobs: {
    title: "Newly Added Jobs",
    icon: <EcoIcon />,
    iconColor: "rgb(92, 184, 92)",
    jobs: [
      {
        jobTitle: "Key Accounts Manager",
        company: "Eazzy Eats",
        place: "lagos",
        jobType: "Full Time",
        duration: "2d",
        jobSector: "Sales",
      },
      {
        jobTitle: "OFFICE MANAGER",
        company: "StreSERT Services Limited",
        place: "lagos",
        jobType: "Full Time",
        duration: "2d",
        jobSector: "Accounting, Auditing & Finance",
      },
      {
        jobTitle: "Field Sales Agent",
        company: "Anonymous Employer",
        place: "lagos",
        jobType: "Full Time",
        duration: "2d",
        jobSector: "Sales",
      },
    ],
  },

  // popular jobs

  popularJobs: {
    title: "Popular Jobs",
    icon: <TrendingUpIcon />,
    iconColor: "rgb(0, 145, 255)",
    jobs: [
      {
        jobTitle: "Waiter / Waitress",
        company: "chateux de atlantique hotel",
        place: "lagos",
        jobType: "Full Time",
        duration: "3w",
        jobSector: "Food Services & Catering",
      },
      {
        jobTitle: "Driver",
        company: "A.0 Demang",
        place: "abuja",
        jobType: "Full Time",
        duration: "3w",
        jobSector: "Driver & Transport Services",
      },
      {
        jobTitle: "STRATEGIC PARTNER",
        company: "CLOSER PICK AND DROP",
        place: "Port Harcourt & River State",
        jobType: "Full Time",
        duration: "3w",
        jobSector: "Consulting & Strategy",
      },
    ],
  },
};

const { featuredJobs, newlyAddedJobs, popularJobs } = data;

export const jobsData = [
  {
    item: featuredJobs,
  },
  {
    item: newlyAddedJobs,
  },
  {
    item: popularJobs,
  },
];
