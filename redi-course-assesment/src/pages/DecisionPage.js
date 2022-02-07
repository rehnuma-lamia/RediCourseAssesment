import React, { useCallback } from "react";
//import { useNavigate } from "react-router-dom";

function DecisionPage() {
  return (
    <main>
      <h1>
        You have 10 correct answers in 20 Questions. Recommended course:
        JavaScript
      </h1>
      <div class="buttons">
        <button class="button" onclick="myFunction()">
          Save
        </button>
        <button class="button" onclick="myFunction2()">
          Cancel
        </button>
      </div>
    </main>
  );
}
export default DecisionPage;
