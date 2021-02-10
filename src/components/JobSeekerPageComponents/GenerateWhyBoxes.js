import PropTypes from "prop-types";
import Why from "./Why";

const GenerateWhyBoxes = ({ data, currentIndex, matchCurrentItem }) => {
  return (
    <>
      {data.map((item, index) => (
        <Why
          key={index}
          {...item}
          itemIndex={index}
          currentIndex={currentIndex}
          matchItem={matchCurrentItem(index)}
        />
      ))}
    </>
  );
};

GenerateWhyBoxes.propTypes = {
  data: PropTypes.array,
  currentIndex: PropTypes.number,
  matchCurrentItem: PropTypes.func,
};
export default GenerateWhyBoxes;
