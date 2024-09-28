import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { physicsQuestions } from './questions/physics';
import { chemistryQuestions } from './questions/chemistry';
import { mathQuestions } from './questions/maths';
import './QuestionPage.css';

function getRandomQuestions(questions, num) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function QuestionPage() {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    let selectedQuestions = [];
    if (subject === 'physics') {
      selectedQuestions = getRandomQuestions(physicsQuestions, 10);
    } else if (subject === 'chemistry') {
      selectedQuestions = getRandomQuestions(chemistryQuestions, 10);
    } else if (subject === 'maths') {
      selectedQuestions = getRandomQuestions(mathQuestions, 10);
    }
    setQuestions(selectedQuestions);
    
    // Scroll to the top of the questions list when component mounts
    window.scrollTo(0, 0);
  }, [subject]);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({ ...answers, [questionIndex]: selectedOption });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score += 1;
      }
    });
    setScore(score);
  };

  return (
    <div className="quiz-page-container">
      <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)} Quiz</h2>
      {questions.length > 0 ? (
        <div className="questions-list">
          {questions.map((q, index) => (
            <div key={index} className="question-card">
              <p className="question-text">{index + 1}. {q.question}</p>
              <div className="options">
                {q.options.map((option, i) => (
                  <label key={i} className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="submit-quiz-btn" onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
      {score !== null && (
        <div className="score-popup">
          <div className="score-content">
            <h3>Your Score: {score} / 10</h3>
            <button className="close-popup-btn" onClick={() => setScore(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
