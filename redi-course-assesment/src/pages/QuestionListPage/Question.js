export function Question({ allQuestions, currentIndex }) {
  return (
    <h1>
      Q{currentIndex + 1}. {allQuestions[currentIndex].question}
    </h1>
  );
}
