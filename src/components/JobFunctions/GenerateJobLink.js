import PropTypes from "prop-types";
import { JobLink } from "./styled";

const GenerateJobLink = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <JobLink to="/" key={index}>
          {item}
        </JobLink>
      ))}
    </>
  );
};

GenerateJobLink.propTypes = {
  items: PropTypes.array,
};

export default GenerateJobLink;
