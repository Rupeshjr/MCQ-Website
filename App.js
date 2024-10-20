import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard.js';
import Score from './Components/Score.js';
// import './App.css';

const questionBank = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Steve Jobs"],
    answer: "Bill Gates",
  },
  {
    question: "Which year did React get released?",
    options: ["2010", "2013", "2015", "2016"],
    answer: "2013",
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = (selectedAnswer) => {
    setSelectedOption(selectedAnswer);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionBank.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questionBank.length} restartQuiz={restartQuiz} />
      ) : (
        <QuestionCard
          question={questionBank[currentQuestion].question}
          options={questionBank[currentQuestion].options}
          selectedOption={selectedOption}
          onSelectOption={handleAnswerOptionClick}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
