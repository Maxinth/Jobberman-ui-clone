import styled, { css } from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  transition: margin 0.2s;
  margin: 3rem auto 1rem;
  width: 200px;
  height: 60px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    margin: 3rem auto 7rem;
    gap: 3px 3px;
  }
`;

const Page = styled.div`
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* padding: 0.5rem 1.4rem; */
  padding: 0.3rem 0.9rem;
  border: 1px solid grey;
  border-radius: 4px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-right: 0.2rem;
  max-height: 40px;
  :hover {
    color: #fff;
    background: grey;
    border: 1px solid #fff;
  }

  ${({ currentPage }) =>
    currentPage &&
    css`
      background-color: rgb(255, 98, 0);
      color: #fff;

      :hover {
        background-color: rgb(255, 98, 0);
        color: #fff;
      }
    `}
`;

export { Container, Page };
