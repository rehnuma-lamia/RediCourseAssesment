import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppContext from "./AppContext.js";
import { QUESTIONS } from "./const/const.js";
// components
import Header from "./components/Header/index";
// PAGES
import DashboardPage from "./pages/DashboardPage";
import DecisionPage from "./pages/DecisionPage";
import QuestionListPage from "./pages/QuestionListPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const allQuestions = QUESTIONS;
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contextValues = {
    score,
    setScore,
    allQuestions,
    currentIndex,
    setCurrentIndex,
  };
  return (
    <div className="App">
      <AppContext.Provider value={contextValues}>
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/decision" element={<DecisionPage />} />
          <Route path="/questions" element={<QuestionListPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
