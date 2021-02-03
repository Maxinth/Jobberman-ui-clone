import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PropTypes from "prop-types";
import styled from "styled-components";
const ControlsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  transition: margin-top 0.2s;

  @media (min-width: 1200px) {
    margin-top: 0.5rem;
  }

  svg {
    color: #333;
    transition: color 0.2s;
  }
  svg.current {
    color: rgb(255, 98, 0);
  }
`;

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
