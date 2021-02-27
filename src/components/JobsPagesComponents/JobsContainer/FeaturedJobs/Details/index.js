import React from "react";
import ItemDetail from "./ItemDetail";
import { data } from "./data";

const Details = () => {
  return (
    <>
      {data.map((item, index) => (
        <ItemDetail key={index} {...item} />
      ))}
    </>
  );
};

export default Details;
