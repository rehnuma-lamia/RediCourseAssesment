import { useState, useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import classNames from "classnames";

export function Answer({ content, isCorrect }) {
  const { score, setScore, currentIndex } = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = (e) => {
    console.log(e.target);
    setIsClicked(true);
    isCorrect && setScore(score + 1);
  };

  useEffect(() => {
    setIsClicked(false);
  }, [currentIndex]);

  return (
    <button
      className={classNames(
        `answer-box ${
          isClicked && (isCorrect ? "correct-answer" : "wrong-answers")
        }`
      )}
      onClick={handleClicked}
    >
      {content}
    </button>
  );
}
