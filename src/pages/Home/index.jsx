import React, { useState } from "react";
import "./Style/Home.css";
import { TextField, MenuItem, Button } from "@material-ui/core";
import Categories from "../../Data/category";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span className="quiz-settings">Configurações do quiz</span>
        <div className="settings-select">
          {error && (
            <ErrorMessage>Por favor, preencha todos os campos</ErrorMessage>
          )}
          <TextField
            style={{ marginBottom: 15, marginTop: 15 }}
            label="Digite o seu nome"
            variant="outlined"
            onChange={(event) => {
              event.stopPropagation();
              setName(event.target.value);
            }}
          />
          <TextField
            style={{ marginBottom: 15, marginTop: 15 }}
            select
            label="Selecione a categoria"
            variant="outlined"
            value={category}
            onChange={(event) => {
              event.stopPropagation();
              setCategory(event.target.value);
            }}
          >
            {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            style={{ marginBottom: 30, marginTop: 15 }}
            label="Selecione a dificuldade"
            variant="outlined"
            value={difficulty}
            onChange={(event) => {
              event.stopPropagation();
              setDifficulty(event.target.value);
            }}
          >
            <MenuItem key="Easy" value="easy">
              Fácil
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Médio
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Difícil
            </MenuItem>
          </TextField>

          <Button variant="contained" size="large" onClick={handleSubmit}>
            Iniciar jogo
          </Button>
        </div>
      </div>
      <img src="./quiz.svg" className="banner" alt="Quiz game" />
    </div>
  );
};

export default Home;
