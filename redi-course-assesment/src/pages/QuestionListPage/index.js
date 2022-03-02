import React, { useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { ArrowButtons } from "./PageButtons";
import "./index.css";
import { ProgressBar } from "./ProgressBar";

function QuestionListPage() {
  const { allQuestions, currentIndex } = useContext(AppContext);
  const allAnswers = [
    ...allQuestions[currentIndex].wrongAnswers.map((answer) => ({
      answer,
      isCorrect: false,
    })),
    { answer: allQuestions[currentIndex].correctAnswer, isCorrect: true },
  ];
  //array of objects including string(answer), boolean(correct or not)
  //shuffle answers

  const shuffleAnswers = (array) => {
    let m = array.length,
      t,
      i;
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  useEffect(() => {
    shuffleAnswers(allAnswers);
  }, [currentIndex]);

  return (
    <main className="question-page">
      <div className="question-box">
        <Question />
        <div className="answer-boxes">
          {allAnswers.map(({ answer, isCorrect }, i) => (
            <Answer key={i} content={answer} isCorrect={isCorrect} />
          ))}
        </div>
      </div>
      <ProgressBar />
      <ArrowButtons />
    </main>
  );
}

export default QuestionListPage;
