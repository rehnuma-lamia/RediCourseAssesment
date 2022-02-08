import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
function DecisionPage() {
  const navigate = useNavigate();

  const saveButtonClick = useCallback(
    () => navigate("/questions", { replace: false }),
    [navigate]
  );
  const cancelButtonClick = useCallback(
    () => navigate("/questions", { replace: false }),
    [navigate]
  );

  return (
    <main>
      <h1>
        You have 10 correct answers in 20 Questions. Recommended course:
        JavaScript
      </h1>
      <div class="buttons">
        <CustomButton
          onClick={saveButtonClick}
          title="Save"
          isPrimary={true}
        />
        <CustomButton
          onClick={cancelButtonClick}
          title="Cancel"
          isPrimary={true}
        />
      </div>
    </main>
  );
}
export default DecisionPage;
