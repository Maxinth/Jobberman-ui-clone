import styled from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  margin: 2rem auto;
  width: 200px;
  height: 60px;
`;

const Page = styled.div`
  border-radius: 100px;

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
`;

export { Container, Page };
