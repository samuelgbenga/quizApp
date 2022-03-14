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
  const [score, setScore] = useState("");

  const fetchQuestion = async (category, difficulty, name) => {
    // const cat = 10;
    // const diff = "medium";
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    // console.log(category, difficult, name);
    data && console.log(data, name, category, difficulty);
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
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
