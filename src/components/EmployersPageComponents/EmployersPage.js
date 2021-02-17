import React from "react";
import Advertise from "./Advertise";
import FeaturedProducts from "./FeaturedProduct";
import HelpSection from "./HelpSection";
import EmployersMainBanner from "./MainBanner";
import SmallBanner from "./SmallBanner";
import ProductsAndPricing from "./ProductsAndPricing";
import HrSolutions from "./HR-Solutions";

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
    </>
  );
};

export default EmployersPage;
