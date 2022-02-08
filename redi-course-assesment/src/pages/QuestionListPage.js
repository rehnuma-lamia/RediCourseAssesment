import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QUESTIONS } from "../const/const";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function QuestionListPage() {
  let navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleBackClick() {
    currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : navigate(-1);
  }

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
  }
  function onSubmit() {
    console.log("submitted");
    navigate("/decision");
  }

  function addScore() {
    console.log("add scored");
    setScore(score + 1);
  }

  return (
    <main className="question-page">
      <div className="question-box">
        <h1>
          Q{currentIndex + 1}. {QUESTIONS[currentIndex].question}
        </h1>
        <div className="answer-boxes">
          <div className="answer-box correct-answer" onClick={addScore}>
            {QUESTIONS[currentIndex].correctAnswer}
          </div>
          {QUESTIONS[0].wrongAnswers.map((an, i) => (
            <div className="answer-box wrong-answers" key={i}>
              {an}
            </div>
          ))}
        </div>
      </div>
      <div className="question-page-buttons">
        <button onClick={handleBackClick}>
          <ArrowBackIosIcon />
          Back
        </button>
        <button
          onClick={
            currentIndex < QUESTIONS.length - 1 ? handleNextClick : onSubmit
          }
        >
          {currentIndex < QUESTIONS.length - 1 ? "Next" : "Submit"}
          <ArrowForwardIosIcon />
        </button>
      </div>
    </main>
  );
}

export default QuestionListPage;

// [] I want to display answers order randomly.
// [] If the user clicks the correct answer, answer box outline should be green , If wrong answers, It should be red.
// [V] If currentIndex  === question.length -1, button text changes 'Submit' from 'Next'
// [V] If you click the 'Submit', display DecisionPage

// MY Qestions
// should I use 'useEffect' to fetch QESTIONS object?
// Is it vaild in this case? (very small object..)
