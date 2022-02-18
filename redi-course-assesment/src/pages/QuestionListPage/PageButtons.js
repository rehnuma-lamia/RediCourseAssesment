import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ArrowButtons({
  beforeLastQuestion,
  currentIndex,
  setCurrentIndex,
}) {
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
        onClick={beforeLastQuestion ? handleNextClick : onSubmit}
      >
        {beforeLastQuestion ? "Next" : "Submit"}
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}
