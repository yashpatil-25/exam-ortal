import React from 'react';
import './Home.css'; // Link the new CSS file
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz'); // Redirect to the quiz page
  };
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Portal</h1>
      <p>
        Explore quizzes in Physics, Chemistry, and Mathematics. Enhance your knowledge and skills.
      </p>
      <button className="start-quiz-btn" onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default Home;
