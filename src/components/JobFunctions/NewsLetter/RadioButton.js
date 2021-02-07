import PropTypes from "prop-types";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  Label,
  RadioButtonContainer,
} from "./styled";

const RadioButton = ({ checked, toggleCheck, label, id }) => {
  // so I don;t have to write same props twice, once for each button state.
  const radioInputProps = {
    type: "radio",
    id: id,
    onClick: toggleCheck,
  };

  return (
    <RadioButtonContainer>
      <>
        {!checked ? (
          <RadioButtonUnchecked {...radioInputProps} />
        ) : (
          <RadioButtonChecked {...radioInputProps} />
        )}
      </>
      <Label htmlFor={id} onClick={toggleCheck}>
        {label}
      </Label>
    </RadioButtonContainer>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  toggleCheck: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default RadioButton;

/* 
the toggleCheck prop has been added to the label element so it can also listen 
for the click event and select an item as the radio buttons would do
when clicked 
*/
