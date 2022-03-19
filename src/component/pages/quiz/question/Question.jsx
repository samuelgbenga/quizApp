import React, { useState } from "react";
import "./question.css";
import { useNavigate } from "react-router-dom";
export default function Question({
  question,
  options,
  correctAnswer,
  currentQues,
  setCurrentQues,
  setScore,
  setMainScore,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const handleSelected = (elem) => {
    if (selected === elem && selected === correctAnswer) {
      return "rightSelection";
    } else if (selected === elem && selected !== correctAnswer) {
      return "wrongSelection";
    } else if (selected) return "unselected";
  };
  //  function to manipulate the useState Array
  const handleScore = (index, elem) => {
    if (elem === correctAnswer) {
      setScore((existingItems) => {
        return [
          ...existingItems.slice(0, index),
          existingItems[index] + 1,
          ...existingItems.slice(index + 1),
        ];
      });
      setMainScore((previousElem) => previousElem + 1);
    } else {
      setScore((existingItems) => {
        return [
          ...existingItems.slice(0, index),
          existingItems[index] + 2,
          ...existingItems.slice(index + 1),
        ];
      });
    }
  };
  //  handle click of selected
  const handleCheck = (elem) => {
    setSelected(elem);
    // if (elem === correctAnswer)
    setError(false);
    handleScore(currentQues, elem);
  };

  const handleNext = () => {
    if (currentQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQues(currentQues + 1);
      setSelected();
    }
  };

  // Handle Quit button
  const handleQuit = () => {
    navigate("/");
  };

  return (
    <div className="questionContainer">
      <div className="questionWrapper">
        <div className="question">
          <div
            dangerouslySetInnerHTML={{
              __html: `${question[currentQues]?.question}`,
            }}
          />
        </div>
        {error && <div className="error">Select an Option</div>}
        <div className="optionWrapper">
          {options &&
            options.map((elem) => (
              <button
                type="radio"
                key={elem}
                dangerouslySetInnerHTML={{
                  __html: `${elem}<div></div>`,
                }}
                onClick={() => handleCheck(elem)}
                className={`${selected && handleSelected(elem)}`}
                disabled={selected}
              />
            ))}
        </div>
        <div className="nextQuitWrapper">
          <button className="next" onClick={handleNext}>
            Next Question
          </button>
          <button className="quit" onClick={handleQuit}>
            Quit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
