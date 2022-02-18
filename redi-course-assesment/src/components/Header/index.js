import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//CSS
import "./index.css";

function Header() {
  const navigate = useNavigate();
  const navigateToAboutPage = useCallback(
    () => navigate("/about", { replace: false }),
    [navigate]
  );
  const navigateToMainPage = useCallback(
    () => navigate("/", { replace: false }),
    [navigate]
  );
  return (
    <div className="navDesign">
      <img
        className="img"
        alt="redi"
        src="https://static.wixstatic.com/media/206b5b_5b3955c03ad0488cb12b21964327e188~mv2.png/v1/crop/x_11,y_0,w_3978,h_800/fill/w_312,h_60,al_c,q_85,usm_0.66_1.00_0.01/HorizontalReDISchool.webp"
        onClick={navigateToMainPage}
      />
      <button className="buttonTop" onClick={navigateToAboutPage}>
        About
      </button>
    </div>
  );
}
export default Header;
