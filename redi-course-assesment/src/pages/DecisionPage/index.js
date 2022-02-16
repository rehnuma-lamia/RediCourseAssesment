import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import "./index.css";

function DecisionPage() {
  const navigate = useNavigate();

  const courseDetailButtonClick = useCallback(
    () =>
      navigate("https://de.redi-school.org/digital-career-program-berlin", {
        replace: false,
      }),
    [navigate]
  );
  const applyCourseButtonClick = useCallback(
    () => navigate("/", { replace: false }),
    [navigate]
  );

  return (
    <main className="dashboard-page">
      <h1>
        You have 10 correct answers in 20 Questions. Recommended course:
        JavaScript
      </h1>
      <div class="buttons">
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
