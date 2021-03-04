import React from "react";
import styled from "styled-components";
import { data } from "../../../../data";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  /* border: 1px solid blue; */
  margin: 2rem auto;
  width: 200px;
  height: 60px;
`;

const Page = styled.div`
  border-radius: 100px;
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1.4rem;
  border: 3px solid ghostwhite;
  border-radius: 50px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  background-color: grey;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-right: 0.1rem;

  :hover {
    color: black;
    background: #fff;
    border: 3px solid grey;
  }

  /* .jobPagination__page.active {
  background: rgb(255, 179, 0);
  color: black;
  border: 3px solid black;
} */
`;

const MockPagination = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Page key={index}>{index + 1}</Page>
      ))}
    </Container>
  );
};

export default MockPagination;
