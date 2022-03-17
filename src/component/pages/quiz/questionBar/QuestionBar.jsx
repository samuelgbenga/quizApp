import React from "react";
import "./questionBar.css";
export default function QuestionBar({ question, currentQues }) {
  return (
    <div className="questionBarWrapper">
      {question.map((elem, index) => {
        return (
          <div
            className={`bar ${
              index > currentQues ? "" : index === currentQues ? "red" : "blue"
            }`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
