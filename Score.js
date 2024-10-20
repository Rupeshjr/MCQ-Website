import React from 'react';
import './Score.css';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score-section">
      <h2>Your Final Score is: {score}/{totalQuestions}</h2>
    </div>
  );
};

export default Score;
