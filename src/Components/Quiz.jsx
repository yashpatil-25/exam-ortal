import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject) => {
    // Navigate to the quiz based on the selected subject
    navigate(`/quiz/${subject}`);
  };

  return (
    <div className="quiz-container">
      <h2>Select a Subject</h2>
      <div className="subject-options">
        <button onClick={() => handleSubjectSelect('physics')}>Physics</button>
        <button onClick={() => handleSubjectSelect('chemistry')}>Chemistry</button>
        <button onClick={() => handleSubjectSelect('maths')}>Mathematics</button>
      </div>
    </div>
  );
}

export default Quiz;
