import React, { useState } from "react";
import "./Style/Questions.css";
import ErrorMessage from "../ErrorMessage";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSelect = (index) => {
    if (selected === index && selected === correct) {
      return "right";
    } else if (selected === index && selected !== correct) {
      return "wrong";
    } else if (index === correct) {
      return "right";
    }
  };

  const handleCheck = (index) => {
    setSelected(index);
    if (index === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currentQuestion > 13) {
      history.push("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      setError("Por favor, selecione uma opção");
    }
  };
  
  const handleQuit = () => {

  }

  return (
    <div className="question">
      <h1>Pergunta {currentQuestion + 1}</h1>
      <div className="single-question">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((index) => (
              <button
                className={`single-option ${selected && handleSelect(index)}`}
                disabled={selected}
                key={index}
                onClick={() => handleCheck(index)}
              >
                {index}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handleQuit}
          >
            Sair
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
