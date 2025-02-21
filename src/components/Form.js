import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [chestpain, setChestpain] = useState('');
  const [restingBP, setRestingBP] = useState('');
  const [fastingbloodsugar, setFastingbloodsugar] = useState('');
  const [restingrelectro, setRestingrelectro] = useState('');
  const [slope, setSlope] = useState('');
  const [noofmajorvessels, setNoofmajorvessels] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      chestpain,
      restingBP,
      fastingbloodsugar,
      restingrelectro,
      slope,
      noofmajorvessels,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Predict Heart Disease Risk</h2>
      <input type="number" value={chestpain} onChange={(e) => setChestpain(e.target.value)} placeholder="Chest Pain" required />
      <input type="number" value={restingBP} onChange={(e) => setRestingBP(e.target.value)} placeholder="Resting Blood Pressure" required />
      <input type="number" value={fastingbloodsugar} onChange={(e) => setFastingbloodsugar(e.target.value)} placeholder="Fasting Blood Sugar" required />
      <input type="number" value={restingrelectro} onChange={(e) => setRestingrelectro(e.target.value)} placeholder="Resting ECG Result" required />
      <input type="number" value={slope} onChange={(e) => setSlope(e.target.value)} placeholder="Slope" required />
      <input type="number" value={noofmajorvessels} onChange={(e) => setNoofmajorvessels(e.target.value)} placeholder="Number of Major Vessels" required />
      <button type="submit">Predict Risk</button>
    </form>
  );
};

export default Form;
