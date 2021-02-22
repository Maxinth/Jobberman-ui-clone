import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import imageOne from "../../assets/loginImages/img-login.jpg";
import imageTwo from "../../assets/loginImages/img-login-2.jpg";
import imageThree from "../../assets/loginImages/img-login-3.jpg";

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

  // images for login page
  loginImages: [imageOne, imageTwo, imageThree],
};

const { iconsData, inputs, loginImages } = data;

export { iconsData, inputs, loginImages };
