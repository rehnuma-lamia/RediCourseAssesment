export function Answers({ allQuestions, currentIndex, score, setScore }) {
  function addScore() {
    console.log("add scored");
    setScore(score + 1);
  }
  return (
    <div className="answer-boxes">
      <div className="answer-box correct-answer" onClick={() => addScore()}>
        {allQuestions[currentIndex].correctAnswer}
      </div>
      {allQuestions[currentIndex].wrongAnswers.map((answer, i) => (
        <div className="answer-box wrong-answers" key={i}>
          {answer}
        </div>
      ))}
    </div>
  );
}
