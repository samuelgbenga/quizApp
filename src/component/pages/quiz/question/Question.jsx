import React from "react";
import "./question.css";
export default function Question({
  question,
  options,
  setCurrentQues,
  currentQues,
}) {
  return (
    <div className="questionContainer">
      <div className="questionWrapper">
        <div className="question">
          <div
            dangerouslySetInnerHTML={{
              __html: `${question[currentQues].question}`,
            }}
          />
        </div>
        <div className="optionWrapper">
          {options &&
            options.map((elem) => (
              <button
                type="radio"
                key={elem}
                dangerouslySetInnerHTML={{
                  __html: `${elem}<div></div>`,
                }}
              />
            ))}
        </div>
        <div className="nextQuitWrapper">
          <button className="next">Next Question</button>
          <button className="quit">Quit Quiz</button>
        </div>
      </div>
    </div>
  );
}
