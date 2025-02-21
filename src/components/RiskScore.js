import React from 'react';
import styled from 'styled-components';

// Styled component for the score container
const ScoreContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const RiskScore = ({ riskScore }) => {
  return (
    <ScoreContainer>
      {riskScore !== null ? (
        <h3>
          Your Heart Disease Risk: 
          <span style={{ color: riskScore === 1 ? 'red' : 'green', marginLeft: '10px' }}>
            {riskScore === 1 ? 'High Risk' : 'Low Risk'}
          </span>
        </h3>
      ) : (
        <p>Awaiting prediction...</p>
      )}
    </ScoreContainer>
  );
};

export default RiskScore;
