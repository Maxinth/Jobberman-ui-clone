import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PropTypes from "prop-types";
import { ControlsContainer } from "./StandOut/standOutElements";
import React from "react";

const CircleControls = ({ data, setIndex, currentItem }) => {
  return (
    <ControlsContainer>
      {data.map((item, index) => {
        return (
          <FiberManualRecordIcon
            key={index}
            onClick={() => setIndex(index)}
            className={currentItem(index)}
          />
        );
      })}
    </ControlsContainer>
  );
};

CircleControls.propTypes = {
  data: PropTypes.array,
  setIndex: PropTypes.func,
  currentItem: PropTypes.func,
};

export default CircleControls;

/* I have added a className prop to the control icon so I can target it within the styling 
as svg.current

CircleControls is reuseable as it is thesame component used by the two sliders , the data of each 
slider is the only thing that changes.
*/
