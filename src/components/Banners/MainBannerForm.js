import React from "react";
import PropTypes from "prop-types";
import { FormContainer, BannerForm } from "./banner.elements";
import SelectBox from "./FormSelect";

const MainBannerForm = ({ selectBoxList, onChange }) => {
  return (
    <FormContainer>
      <BannerForm>
        {selectBoxList.map((item) => {
          const { items, currentChoice, id } = item;
          return (
            <SelectBox
              key={id}
              items={items}
              currentChoice={currentChoice}
              onChange={onChange}
              id={id}
              // choice={choice}
            />
          );
        })}
      </BannerForm>
    </FormContainer>
  );
};

MainBannerForm.propTypes = {
  selectBoxList: PropTypes.array,
  onChange: PropTypes.func,
};

export default MainBannerForm;
