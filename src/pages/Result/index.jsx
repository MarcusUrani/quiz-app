import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import './Style/Result.css'

export const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Parabéns {name}</span>
      <span className="title">Placar Final: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Voltar ao Início
      </Button>
    </div>
  );
};

export default Result;
