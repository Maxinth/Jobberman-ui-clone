import React from "react";
import StarIcon from "@material-ui/icons/Star";
import EcoIcon from "@material-ui/icons/Eco";

export const data = [
  {
    position: "IT Sales Manager",
    company: "Anonymous Employer",
    location: "lagos",
    jobType: "full time",
    jobModule: "sales",

    timeStamp: {
      iconOne: <StarIcon />,
      iconOneColor: "rgb(213, 44, 61)",
      time: "4w",
    },
  },
  {
    position: "HUMAN RESOURCE AND ADMINISTRATIVE MANAGER",
    company: "Anonymous Employer",
    location: "lagos",
    jobType: "full time",
    jobModule: "Human Resources",
    timeStamp: {
      iconOne: <EcoIcon />,
      iconTwo: <StarIcon />,
      iconOneColor: "rgb(92, 184, 92)",
      iconTwoColor: "rgb(213, 44, 61)",
      time: "2w",
    },
  },
  {
    position: "HR MANAGER & ADMIN MANAGER",
    company: "Dozzy Oil & Gas Limited",
    location: "lagos",
    jobType: "full time",
    jobModule: "Human Resources",
    timeStamp: {
      iconOne: <StarIcon />,
      iconOneColor: "rgb(213, 44, 61)",
      time: "1mo",
    },
  },
];
