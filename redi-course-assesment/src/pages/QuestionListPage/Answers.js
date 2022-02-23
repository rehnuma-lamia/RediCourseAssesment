import { useEffect, useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

export function Answers({ allQuestions, currentIndex, score, setScore }) {
  const [isWrongClicked, setIsWrongClicked] = useState(false);
  const [isCorrectClicked, setIsCorrectClicked] = useState(false);
  const id = uuidv4();

  function addScore() {
    console.log("add scored");
    setScore(score + 1);
    setIsCorrectClicked(true);
  }

  function wrongClick(id, e) {
    console.log(e.target.id, id);
    e.target.id === id && setIsWrongClicked(true);
    console.log("wrong answer clicked", isWrongClicked);
  }

  //remove correct/wrong answers class
  useEffect(() => {
    setIsCorrectClicked(false);
    setIsWrongClicked(false);
  }, [currentIndex]);

  return (
    <div className="answer-boxes">
      <div
        className={classNames(
          `answer-box ${isCorrectClicked && "correct-answer"}`
        )}
        onClick={addScore}
      >
        {allQuestions[currentIndex].correctAnswer}
      </div>
      {allQuestions[currentIndex].wrongAnswers.map((answer, i) => (
        <div
          className={classNames(
            `answer-box ${isWrongClicked && "wrong-answers"}`
          )}
          onClick={wrongClick.bind(this, id)}
          id={id}
          key={i}
        >
          {answer}
        </div>
      ))}
    </div>
  );
}
