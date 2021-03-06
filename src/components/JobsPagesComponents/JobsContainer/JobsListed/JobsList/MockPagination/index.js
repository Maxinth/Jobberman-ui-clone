import React from "react";
import { Container, Page } from "./styled";
import { data } from "../../../../data";
import { useGlobalContext } from "../../../../../context";

const MockPagination = () => {
  const { changePage, pageNo } = useGlobalContext();

  return (
    <Container>
      {data.map((item, index) => (
        <Page
          key={index}
          onClick={() => changePage(index)}
          currentPage={pageNo === index}
        >
          {index + 1}
        </Page>
      ))}
    </Container>
  );
};

export default MockPagination;
