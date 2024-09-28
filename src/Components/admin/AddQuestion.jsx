import React, { useState } from 'react';

function AddQuestion() {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddOption = () => {
    setOptions((prevOptions) => [...prevOptions, { id: options.length + 1, text: '' }]);
  };

  const handleOptionChange = (index, value) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].text = value;
      return updatedOptions;
    });
  };

  const handleSubmitQuestion = () => {
    // Validate input and submit question data to an API or database
    console.log('Submitting question:', { questionText, options, correctAnswer });
  };

  return (
    <div className="add-question-container">
      <h2>Add Question</h2>
      <label>Question Text:</label>
      <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
      <label>Options:</label>
      <ul>
        {options.map((option, index) => (
          <li key={option.id}>
            <input type="text" value={option.text} onChange={(e) => handleOptionChange(index, e.target.value)} />
            <button onClick={() => handleRemoveOption(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddOption}>Add Option</button>
      <label>Correct Answer:</label>
      <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.text}
          </option>
        ))}
      </select>
      <button onClick={handleSubmitQuestion}>Submit Question</button>
    </div>
  );
}

export default AddQuestion;