import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import QuestionBar from "./questionBar/QuestionBar";
import Question from "./question/Question";
import "./quiz.css";

export default function Quiz({ name, question, score, setScore }) {
  const [options, setOptions] = useState();
  const [currentQues, setCurrentQues] = useState(0);

  useEffect(() => {
    question &&
      setOptions(
        shuffleOpt([
          question[currentQues].correct_answer,
          ...question[currentQues].incorrect_answers,
        ])
      );
  }, [currentQues, question]);

  const shuffleOpt = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quizContainer">
      {question ? (
        <div className="quizWrapper">
          <div className="quizHead">
            <div className="quizTitle">
              {question[currentQues].category} Quiz
            </div>
            <div className="quesNum">
              Question <span className="currentLength">{currentQues}</span>
              <span className="quesLength">/{question.length}</span>
            </div>
          </div>
          <div className="barWrapper" style={{ width: "100%" }}>
            <QuestionBar question={question} currentQues={currentQues} />
          </div>
          <Question
            options={options}
            question={question}
            setCurrentQues={setCurrentQues}
            currentQues={currentQues}
          />
        </div>
      ) : (
        <CircularProgress
          size="13.5rem"
          thickness={1.1}
          style={{
            margin: "10% auto",
            color: "grey",
          }}
        />
      )}
    </div>
  );
}
