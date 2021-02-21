import React from "react";
import ContactPageContents from "../ContactPageContents";
import ContactAboutContents from "../contact-About";
import FAQPageContents from "../contact-FAQ";
import ContactSafetyContents from "../contact-Safety";

export const pagesData = [
  { heading: "About us", content: <ContactAboutContents />, page: "aboutPage" },

  { heading: "FAQ", content: <FAQPageContents />, page: "FAQ" },
  {
    heading: "Safe Job Hunting",
    content: <ContactSafetyContents />,
    page: "safeJobHunting",
  },
  {
    heading: "Contact us",
    content: <ContactPageContents />,
    page: "contactMainPage",
  },
];

export const pageHeading = (id) => {
  return pagesData[id].heading;
};

export const pageContent = (id) => {
  return pagesData[id].content;
};
