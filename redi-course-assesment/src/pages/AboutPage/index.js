import { useState, useEffect } from "react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import redi from "../../images/redi.jpeg";
import "./index.css";

function AboutPage() {
  let items = [
    {
      title: "You can do self Assesment test for Web development courses",
      details:
        "To do a assesment You know the basic use of the computer (eg. email,web browser, Excel, PowerPoint). You can communicate in English speaking, listening and writing). You are 18 years and older We givepriority to people with a forced migration background.",
    },
    {
      title: "What is course assessment?",
      details:
        "Course-level assessment is a process of systematically examining and refining the fit between the course activities and what students should know at the end of the course.",
    },
    {
      title: "Why do you need course assessment?",
      details:
        "Couse assessment is needed to figure out the right course for you.",
    },
  ];
  return (
    <div>
      <img className="aboutTopImage" alt="redi" src={redi} />
      <h1>About ReDI Course Assesment </h1>

      {
        <div>
          {items.map((item) => (
            <div className="aboutPageDesign">
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
export default AboutPage;
