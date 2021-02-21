import React from "react";
import ContactPageContents from "../ContactPageContents";
import ContactAboutContents from "../contact-About";

export const pagesData = [
  { heading: "About us", content: <ContactAboutContents />, page: "aboutPage" },

  { heading: "", content: "", page: "" },
  { heading: "", content: "", page: "" },
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
