export { oneChoiceFilter } from "./oneChoiceFilter";
export { multipleChoicesFilter } from "./multipleChoicesFilter";
export { FilterJobsByInput } from "./FilterJobsByInput";

// custom function to expose function parameters to be spread in other function's signature
export const getInputs = (parameters) => {
  const moduleFilterInput = parameters[0];
  const industryFilterInput = parameters[1];
  const locationFilterInput = parameters[2];

  // so I don't have to keep typing out these parameters
  const inputs = [moduleFilterInput, industryFilterInput, locationFilterInput];

  return {
    inputs,
    moduleFilterInput,
    industryFilterInput,
    locationFilterInput,
  };
};
