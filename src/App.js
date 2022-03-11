import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/pages/home/Home";
import Quiz from "./component/pages/quiz/Quiz";
import Result from "./component/pages/result/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="appWrapper">
          <Header />
          <div className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
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
