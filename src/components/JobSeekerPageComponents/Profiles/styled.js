import styled from "styled-components";
import { Title } from "../styled";

// Profiles
const ProfileContainer = styled.section`
  padding: 1rem 2rem;
  ${Title} {
    line-height: 1.7;
    font-weight: 600;
  }
`;

const Container = styled.section`
  padding: 1rem 2rem;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

// Profile
const ProfileDetails = styled.section`
  text-align: center;
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
  max-width: 400px;
`;

const ProfileBox = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    margin-bottom: unset;
    padding: unset;
    :first-child {
      padding-top: 1.5rem;
    }
  }
`;
const ProfileImage = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
  max-width: 400px;
  @media (min-width: 1024px) {
    max-width: 300px;
  }
`;

const Heading = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Text = styled.p`
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  line-height: 1.7;
`;

// TopHeading
const HeadingContainer = styled.section`
  margin: 1rem auto;
  max-width: 900px;
  ${Text} {
    max-width: 500px;
    margin: 0.5rem auto;
  }
`;
export {
  ProfileContainer,
  Container,
  ProfileDetails,
  ProfileBox,
  ProfileImage,
  Heading,
  Text,
  HeadingContainer,
};
