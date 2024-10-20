import React from 'react';
import './QuestionCard.css'; // Optional: Include if you have a CSS file for styling

const QuestionCard = ({ question, options, selectedOption, onSelectOption, onNext }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => onSelectOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="next-button" onClick={onNext} disabled={!selectedOption}>
        Next
      </button>
    </div>
  );
};

export default QuestionCard;
