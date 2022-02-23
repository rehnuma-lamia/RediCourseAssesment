import { useState, useEffect } from "react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import redi from "../../images/redi.jpeg";
import "./index.css";

function AboutPage() {
  let items = ["ishtiak", "lamia", "Zavian", "nnm", "ooo"];
  return (
    <div>
      <img className="aboutTopImage" alt="redi" src={redi} />
      <h1>About ReDI Course Assesment </h1>

      <div>
        {items.map((value, index) => (
          <div>
            {index + 1}. {value}
          </div>
        ))}
      </div>

      <div className="aboutPageDesign">
        <h3>You can do self Assesment test for Web development courses</h3>
        <p>
          To do a assesment You know the basic use of the computer (eg. email,
          web browser, Excel, PowerPoint). You can communicate in English
          (speaking, listening and writing). You are 18 years and older We give
          priority to people with a forced migration background.
        </p>
      </div>
    </div>
  );
}
export default AboutPage;
