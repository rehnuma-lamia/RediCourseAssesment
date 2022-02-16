import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

// Component
import CustomButton from "../../components/CustomButton";

function DashboardPage() {
  const navigate = useNavigate();
  const navigateToQuestionPage = useCallback(
    () => navigate("/questions", { replace: false }),
    [navigate]
  );

  return (
    <main className="dashboard-page">
      <h1>
        Are you interested in taking Web Development Course in Digital Career
        Program?
      </h1>
      <CustomButton
        onClick={navigateToQuestionPage}
        title="Go To Assesment"
        isPrimary={false}
      />
    </main>
  );
}

export default DashboardPage;
