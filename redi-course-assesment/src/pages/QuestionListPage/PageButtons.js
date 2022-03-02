import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ArrowButtons() {
  const { allQuestions, currentIndex, setCurrentIndex } =
    useContext(AppContext);
  let navigate = useNavigate();
  function handleBackClick() {
    currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : navigate(-1);
  }

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
  }

  function onSubmit() {
    console.log("submitted");
    navigate("/decision");
  }
  return (
    <div className="question-page-buttons">
      <button className="arrow-button" onClick={handleBackClick}>
        <ArrowBackIosIcon />
        Back
      </button>
      <button
        className="arrow-button"
        onClick={
          currentIndex < allQuestions.length - 1 ? handleNextClick : onSubmit
        }
      >
        {currentIndex < allQuestions.length - 1 ? "Next" : "Submit"}
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}
