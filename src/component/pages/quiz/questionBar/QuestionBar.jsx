import React from "react";
import "./questionBar.css";

export default function QuestionBar({ currentQues, score }) {
  return (
    <div className="questionBarWrapper">
      {score.map((elem, index) => {
        return (
          <div
            className={`bar ${
              index > currentQues
                ? ""
                : index === currentQues
                ? "blue"
                : elem === 1
                ? "green"
                : "red"
            }`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
