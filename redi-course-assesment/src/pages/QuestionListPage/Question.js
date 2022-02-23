import { useContext } from "react";
import AppContext from "../../AppContext";

export function Question() {
  const { allQuestions, currentIndex } = useContext(AppContext);
  return (
    <h1>
      Q{currentIndex + 1}. {allQuestions[currentIndex].question}
    </h1>
  );
}
