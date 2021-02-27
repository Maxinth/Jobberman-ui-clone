import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  font-family: "Roboto", sans-serif;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  min-height: 50px;
  /* border-radius: 3px 3px 0 0; */
  background: linear-gradient(0deg, #1a4d98, #4168c6);
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  display: flex;
  align-items: center;
  /* padding: 2rem; */
  height: 100%;
  width: 100%;
`;

export { Title, Header };
