// CSS
import "./index.css";

function CustomButton({ title, isPrimary, onClick }) {
  return (
    <button
      className={isPrimary ? "buttonPrimary" : "buttonSecondary"}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
