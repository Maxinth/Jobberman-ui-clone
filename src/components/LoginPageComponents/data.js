import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

export const data = {
  // icon login auth  data array;
  iconsData: [
    { id: "facebook", icon: <FacebookIcon />, color: "#3b5998" },
    { id: "twitter", icon: <TwitterIcon />, color: "#00acee" },
    { id: "linkedIn", icon: <LinkedInIcon />, color: "#0e76a8" },
  ],

  // input fields data array
  inputs: [
    { type: "email", placeholder: "Email Address" },
    { type: "password", placeholder: "Password" },
  ],
};

const { iconsData, inputs } = data;

export { iconsData, inputs };
