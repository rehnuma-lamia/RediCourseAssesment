import React, { useCallback, useContext } from "react";
import AppContext from "../../AppContext";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import "./index.css";

function DecisionPage() {
  const { allQuestions, score } = useContext(AppContext);
  const navigate = useNavigate();

  const courseDetailButtonClick = (e) => {
    // e.preventDefault();
    window.location.href =
      "https://de.redi-school.org/digital-career-program-berlin";
  };

  const applyCourseButtonClick = useCallback(
    () => navigate("/", { replace: false }),
    [navigate]
  );

  function courseTitleBy(score) {
    if (score > 3 && score < 6) {
      return "Frontend Development";
    } else if (score > 6) {
      return "React";
    } else {
      return "Introduction to computer science";
    }
  }

  return (
    <main className="dashboard-page">
      <h1>
        You have {score} correct answers in {allQuestions.length} Questions.
        Recommended course: {courseTitleBy(score)}
      </h1>
      <div className="buttons">
        <CustomButton
          onClick={courseDetailButtonClick}
          title="Course Details"
          isPrimary={true}
        />
        <CustomButton
          onClick={applyCourseButtonClick}
          title="Apply To Course"
          isPrimary={true}
        />
      </div>
    </main>
  );
}
export default DecisionPage;
