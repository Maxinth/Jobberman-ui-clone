import React from "react";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PersonIcon from "@material-ui/icons/Person";

export const data = [
  {
    icon: <PersonIcon />,
    title: "Job Seeker",
    howTo: `Are you looking for your dream job? Create a unique career profile with Jobberman `,
    text: "job seeker sign up",
    goTo: "/customer/signup",
  },
  {
    icon: <BusinessCenterIcon />,
    title: " Employer",
    howTo: `Are you looking for quality candidates? Advertise and search with Jobberman `,
    text: "employer sign up",
    goTo: "/employer/signup",
  },
];
