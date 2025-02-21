import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RiskScore from './components/RiskScore';
import Map from './components/Map';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const [riskScore, setRiskScore] = useState(null);

  const handlePrediction = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setRiskScore(data.risk_score);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Form onSubmit={handlePrediction} />
      <RiskScore riskScore={riskScore} />
      <Map />
      <AboutUs />
    </div>
  );
}

export default App;
