import "./App.css";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/pages/home/Home";
import Quiz from "./component/pages/quiz/Quiz";
import Result from "./component/pages/result/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [mainScore, setMainScore] = useState(0);

  const fetchQuestion = async (category, difficulty, name) => {
    // const cat = 10;
    // const diff = "medium";
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    // data && console.log(data.results);
    // data && console.log(data, name, category, difficulty);
    name && setName(name);

    setQuestion(data.results);
  };
  return (
    <Router>
      <div className="App">
        <div className="appWrapper">
          <Header />
          <div className="appBody">
            <Routes>
              <Route
                path="/"
                element={<Home fetchQuestion={fetchQuestion} />}
              />
              <Route
                path="/quiz"
                element={
                  <Quiz
                    name={name}
                    question={question}
                    setMainScore={setMainScore}
                  />
                }
              />
              <Route
                path="/result"
                element={
                  <Result
                    mainScore={mainScore}
                    name={name}
                    setMainScore={setMainScore}
                  />
                }
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
