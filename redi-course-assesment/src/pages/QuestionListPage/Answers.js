import { useEffect, useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

export function Answers({ allQuestions, currentIndex, score, setScore }) {
  const [isWrongClicked, setIsWrongClicked] = useState(false);
  const [isCorrectClicked, setIsCorrectClicked] = useState(false);

  function addScore() {
    console.log("add scored");
    setScore(score + 1);
    setIsCorrectClicked(true);
  }

  function wrongClick(e) {
    console.log(e.target.id);
    setIsWrongClicked(true);
<<<<<<< HEAD
    isWrongClicked
      ? e.target.classList.add("wrong-answers")
      : e.target.classList.remove("wrong-answers");
    // e.target.id === this.id && setIsWrongClicked(true);
=======
>>>>>>> master
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
          `answer-box ${isCorrectClicked && "correct-answer"} ${
            isWrongClicked && "clicked"
          }`
        )}
        onClick={addScore}
      >
        {allQuestions[currentIndex].correctAnswer}
      </div>
      {allQuestions[currentIndex].wrongAnswers.map((answer, i) => (
        <div
<<<<<<< HEAD
          className={classNames(`answer-box ${isCorrectClicked && "clicked"}`)}
=======
          className={classNames(
            `answer-box ${isWrongClicked && "wrong-answers"}`
          )}
>>>>>>> master
          onClick={wrongClick}
          id={uuidv4()}
          key={i}
        >
          {answer}
        </div>
      ))}
    </div>
  );
}

//[ ] once we click one answer, others are not clicable
