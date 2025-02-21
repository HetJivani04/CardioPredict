import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #ecf0f1;
  padding: 40px 20px;
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <h2>About Us</h2>
      <p>
        CardioPredict is an AI-powered platform that predicts heart disease risk based on user health data.
      </p>
      <p>
        Our prediction model is built using state-of-the-art machine learning techniques and has been tested for accuracy in predicting heart disease risk.
      </p>
    </AboutContainer>
  );
};

export default AboutUs;
