import React from "react";
import Advertise from "./Advertise";
import FeaturedProducts from "./FeaturedProduct";
import HelpSection from "./HelpSection";
import EmployersMainBanner from "./MainBanner";
import SmallBanner from "./SmallBanner";
import ProductsAndPricing from "./ProductsAndPricing";
import HrSolutions from "./HR-Solutions";
import GetStarted from "./GetStarted";
import NewsLetterSection from "./NewsLetter";

const EmployersPage = () => {
  return (
    <>
      <SmallBanner />
      <EmployersMainBanner />
      <Advertise />
      <HelpSection />
      <FeaturedProducts />
      <ProductsAndPricing />
      <HrSolutions />
      <GetStarted />
      <NewsLetterSection />
    </>
  );
};

export default EmployersPage;
