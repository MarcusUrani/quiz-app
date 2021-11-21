import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=15&${
        category && `&category=${category}`
      }${difficulty && `&dificulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <Router>
      <div
        className="app"
        style={{
          backgroundImage: "url(./quiz-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route exact path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route exact path="/result">
            <Result name={name} score={score}/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
