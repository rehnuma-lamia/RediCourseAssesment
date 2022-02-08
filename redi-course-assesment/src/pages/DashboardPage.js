import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Component
import CustomButton from "../components/CustomButton";

function DashboardPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
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
        className="dash-button"
        onClick={handleOnClick}
        title="Go To Assesment"
        isPrimary={true}
      />
    </main>
  );
}

export default DashboardPage;
