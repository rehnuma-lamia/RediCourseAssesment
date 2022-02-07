import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/index";

// PAGES
import DashboardPage from "./pages/DashboardPage";
import DecisionPage from "./pages/DecisionPage";
import QuestionListPage from "./pages/QuestionListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/decision" element={<DecisionPage />} />
        <Route path="/questions" element={<QuestionListPage />} />
      </Routes>
    </div>
  );
}

export default App;
