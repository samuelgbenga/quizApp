import React from "react";
import "./result.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function Result({ name, mainScore, setMainScore }) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
    setMainScore(0);
  };
  return (
    <div className="resultContainer">
      <div className="resultWrapper">
        <h2 className="resultHeading">Quiz Result</h2>
        <div className="cupScore">
          <img
            src={require("./resultImages/cup.png")}
            alt="another one"
            style={{ width: 150, heigth: "auto" }}
          />
          <div className="scoreContainer">
            <div className="score">{mainScore}</div>
          </div>
        </div>
        <h1>Congratulations!</h1>
        <h3>{name}</h3>
        <p>
          So far so Good, You have done Well. Your participation <br />
          in this quiz contest is really appreciated, and it will
          <br />
          never go unrewarded. <span className="congrat">
            Congratulations!
          </span>{" "}
          keep the good work up. <br />
          The Sky will be your beginning
        </p>

        <Button
          variant="contained"
          className="newQuiz"
          size="large"
          onClick={() => handleButtonClick()}
          sx={{ fontSize: 20, m: 3 }}
        >
          Take New Quiz
        </Button>
      </div>
      <div className="resultBackground">
        <img src={require("./resultImages/congi.gif")} alt="another one" />
      </div>
    </div>
  );
}
