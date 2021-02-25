import styled from "styled-components";
import { Btn } from "../../StandOut/standOutElements";
import { Container as PlanBox } from "../../JobsOverview/jobsElements";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// PlanDetails

const PlanDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Btn} {
    max-width: 200px;
    min-width: 200px;
    margin: 0 auto 3rem;
    > a {
      padding: 0.5rem;
    }
  }
`;
const Details = styled.ul`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

// DetailsListItem
const Text = styled.p`
  line-height: 1.7;
  transform: translateY(-10px);
  font-weight: 300;
`;

const BoldText = styled.span`
  font-weight: 600;
  color: inherit;
`;

const BulletPoint = styled(FiberManualRecordIcon)`
  margin-right: 1rem;
  font-size: 1rem !important;
`;

const DetailsItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: rgb(78, 85, 89);
  margin-bottom: 1rem;
`;

// PlanDetailsSection
export const Section = styled.section``;

// PlanMain

const PlanHeader = styled.h3`
  background-color: ${({ bgColor }) => bgColor};
  padding: 1rem;
  width: 100%;
  color: ${({ bgColor }) => (bgColor === "#cd7f32" ? "#fff" : "#333")};
  /* color: #333; */
  text-transform: capitalize;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 2.5px;
  font-size: 1.5rem;
`;

// PriceSection
const PriceBox = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: "Open Sans", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Currency = styled.sup`
  font-size: 1rem;
  font-weight: 500;
  transform: translateY(-6px);
  margin-right: 0.2rem;
`;
const Price = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

const PriceContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(78, 85, 89);
`;

const Span = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  transform: translate(20px, -35px);
`;

// index
const PlansContainer = styled.section`
  padding: 1rem 2rem;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  background-color: #fff;
  ${PlanBox} {
    margin: 3rem auto;
    max-width: 600px;
    display: block;
    padding: unset;
    transition: max-width 0.2s;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;

    &:first-child {
      ${PriceBox} {
        margin-bottom: 1rem;
      }
    }
    @media (min-width: 1024px) {
      max-width: 400px;
      &:first-child {
        ${Details} {
          margin-bottom: 6rem;
        }
      }
    }
  }
`;

export {
  PlanDetailsContainer,
  Details,
  Text,
  BoldText,
  BulletPoint,
  DetailsItem,
  PlanBox,
  PlanHeader,
  PriceBox,
  Currency,
  Price,
  PriceContainer,
  Span,
  PlansContainer,
};
