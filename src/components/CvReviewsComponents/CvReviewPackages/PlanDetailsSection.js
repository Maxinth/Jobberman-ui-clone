import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const PlanDetailsContainer = styled.section``;
const PlanDetails = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;
const DetailsItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: rgb(78, 85, 89);
`;
const BoldText = styled.span`
  font-weight: 600;
  color: inherit;
`;
const BulletPoint = styled(FiberManualRecordIcon)`
  margin-right: 2rem;
`;
const Text = styled.p`
  line-height: 1.7;
  transform: translateY(-10px);
`;

const PlanDetailsSection = () => {
  return (
    <PlanDetailsContainer>
      <PlanDetails>
        <DetailsItem>
          <BulletPoint />
          <Text>
            <BoldText>Professionally Written</BoldText> : A top standard CV that
            showcases your strengths & achievements.
          </Text>
        </DetailsItem>
      </PlanDetails>
    </PlanDetailsContainer>
  );
};

export default PlanDetailsSection;
