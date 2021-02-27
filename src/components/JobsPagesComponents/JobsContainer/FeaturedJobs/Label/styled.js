import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Icon = styled(PlayArrowIcon)`
  font-size: 2.5rem !important;
  transform: translateX(-14px);
  height: 100%;
  border: none;
  outline: none;
`;
const LabelBox = styled.div`
  position: relative;
  width: unset;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgb(255, 98, 0);
  font-family: "Roboto", sans-serif;
  height: 50px;
  text-transform: uppercase;
  width: unset;
  max-width: 120px;
  max-height: 23px;
  transform: rotate(-90deg);
  margin-left: -1rem;
`;

const Span = styled.span`
  position: relative;
  right: 10px;
  font-size: 0.9rem;
`;

export { Box, Span, LabelBox, Icon };
