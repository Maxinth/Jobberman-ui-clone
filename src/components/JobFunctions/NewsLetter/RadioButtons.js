import { useState } from "react";
import { RadioContainer } from "./styled";
import { radiosList } from "./formData";
import RadioButton from "./RadioButton";
import React from "react";

const RadioButtons = () => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState({ jobSeeker: false, employer: false });
  // see comments
  const toggleCheck = (id) => {
    return setRadio({ jobSeeker: false, employer: false, [id]: true });
  };

  return (
    <RadioContainer>
      {radiosList.map((item) => (
        <RadioButton
          key={item.id}
          {...item}
          checked={radio[item.id]} // see comments
          toggleCheck={() => toggleCheck(item.id)} // see comments
        />
      ))}
    </RadioContainer>
  );
};

export default RadioButtons;

/* 
toggleCheck is set to change only the radio button with matching id to true while 
the other is false and vice versa

the checked prop uses the property accessor on the radio object to get the initial
values of each button which is false for both buttons.

The false value corresponds to the <RadioButtonUnchecked /> radio button in RadioButton
which changes to the <RadioButtonChecked when clicked and the toggleCheck function sets
the current value of the clicked item to true.

*/
