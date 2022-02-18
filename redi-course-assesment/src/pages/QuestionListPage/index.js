import React, { useState } from "react";
import { QUESTIONS } from "../../const/const";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { ArrowButtons } from "./PageButtons";
import "./index.css";
import { ProgressBar } from "./ProgressBar";

function QuestionListPage() {
  const allQuestions = QUESTIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const beforeLastQuestion = currentIndex < QUESTIONS.length - 1;

  return (
    <main className="question-page">
      <div className="question-box">
        <Question currentIndex={currentIndex} allQuestions={allQuestions} />
        <Answers
          allQuestions={allQuestions}
          currentIndex={currentIndex}
          score={score}
          setScore={setScore}
        />
      </div>
      <ProgressBar currentIndex={currentIndex} />
      <ArrowButtons
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        beforeLastQuestion={beforeLastQuestion}
      />
    </main>
  );
}

export default QuestionListPage;
