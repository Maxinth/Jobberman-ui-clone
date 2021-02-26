import React from "react";
import PlanMain from "./PlanMain";
import { dataPlans } from "./data";

const GeneratePlans = () => {
  return (
    <>
      {dataPlans.map((item, index) => (
        <PlanMain key={index} plan={item.plan} />
      ))}
    </>
  );
};

export default GeneratePlans;
