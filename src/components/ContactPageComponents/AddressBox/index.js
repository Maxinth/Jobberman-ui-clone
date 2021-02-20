import React from "react";
import styled from "styled-components";
import { Text } from "../styled";
import { details } from "./data";

const AddressBox = styled.div``;
const AddressSection = () => {
  return (
    <AddressBox>
      {details.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </AddressBox>
  );
};

export default AddressSection;
