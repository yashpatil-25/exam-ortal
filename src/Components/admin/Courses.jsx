import React from 'react';
import { useNavigate } from 'react-router-dom';

function Result({ score }) {
  const navigateToHome = () => {
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div className="result-container">
      <h2>Quiz Results</h2>
      <p>Your Score: {score}</p>
      <button onClick={navigateToHome}>Home</button>
    </div>
  );
}

export default Result;