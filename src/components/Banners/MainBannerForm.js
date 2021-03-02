import React from "react";
import PropTypes from "prop-types";
import { FormContainer, BannerForm } from "./banner.elements";
import SelectBox from "./FormSelect";

const MainBannerForm = ({ selectBoxList, onChange, handleSubmit }) => {
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
              handleSubmit={handleSubmit}
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
  handleSubmit: PropTypes.func,
};

export default MainBannerForm;
