import styled, { css } from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Container = styled.section`
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid rgb(231, 228, 228);
  border-top: 1px solid rgb(231, 228, 228);
`;
const Span = styled.span``;
const DropIcon = styled(ArrowDropDownIcon)``;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  cursor: pointer;
  > span + svg {
    transition: transform 0.2s;
  }
  ${({ dropDownState }) =>
    dropDownState &&
    css`
      > span + svg {
        transform: rotate(180deg);
      }
    `}
`;

const FilterOptionsBox = styled.section``;

const SubContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.5rem;
  border-bottom: 1px solid rgb(231, 228, 228);
  border-top: 1px solid rgb(231, 228, 228);
  cursor: pointer;
  ${Box} {
    padding-left: unset;
    padding-right: unset;
    > svg {
      margin-right: 0.5rem;
    }
    & > svg + span {
      font-weight: 300;
    }
  }
`;

export { Container, Span, DropIcon, Box, SubContainer, FilterOptionsBox };
