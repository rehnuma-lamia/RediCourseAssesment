import React, { useState, useContext } from "react";
import AppContext from "../../AppContext";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { ArrowButtons } from "./PageButtons";
import "./index.css";
import { ProgressBar } from "./ProgressBar";

function QuestionListPage() {
  const { allQuestions, score, setScore } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const beforeLastQuestion = currentIndex < allQuestions.length - 1;

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
      <ProgressBar currentIndex={currentIndex} allQuesetions={allQuestions} />
      <ArrowButtons
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        beforeLastQuestion={beforeLastQuestion}
      />
    </main>
  );
}

export default QuestionListPage;
