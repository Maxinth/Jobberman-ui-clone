import React from "react";
import styled from "styled-components";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
const RadioButtonUnchecked = styled(RadioButtonUncheckedIcon)``;
const Label = styled.label`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
const RadioButtonChecked = styled(RadioButtonCheckedIcon)``;
const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgb(78, 85, 89);
`;
const RadioButton = ({ checked, toggleCheck, label, id }) => {
  // so I don;t have to write same props twice, once for each button state.
  const radioInputProps = {
    type: "radio",
    id: id,
    onClick: toggleCheck,
  };
  return (
    <RadioButtonContainer>
      {!checked ? (
        <RadioButtonUnchecked {...radioInputProps} />
      ) : (
        <RadioButtonChecked {...radioInputProps} />
      )}
      <Label htmlFor={id} onClick={toggleCheck}>
        {label}
      </Label>
    </RadioButtonContainer>
  );
};

export default RadioButton;

/* 
the toggleCheck prop has been added to the label element so it can also listen 
for the click event and select an item as the radio buttons would do
when clicked 
*/
