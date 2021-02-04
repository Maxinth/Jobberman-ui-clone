import React from "react";
import Headings from "./Headings";
import useSliderAndGetCurrentValues from "../useSliderAndGetCurrentValues";
import { data } from "./data";
import CompaniesLogo from "./CompaniesLogo";
import CircleControls from "../../components/CircleControls";
import CTA from "../CTA";
import {
  ConnectContainer,
  ConnectBox,
  CompaniesLogosContainer,
} from "./styled";

const Connect = () => {
  const {
    items,
    index,
    makeCurrentSlide,
    matchCurrentItem,
  } = useSliderAndGetCurrentValues(data, 5000);
  return (
    <ConnectContainer>
      <ConnectBox>
        <Headings />
        <CompaniesLogosContainer>
          <CompaniesLogo items={items} index={index} />
        </CompaniesLogosContainer>
        <CircleControls
          data={items}
          setIndex={makeCurrentSlide}
          currentItem={matchCurrentItem}
        />
        <CTA text="view more companies hiring" goTo="/companies" />
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
