import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Um App feito com React</h1>
      <p>Bem-vindo ao meu Aplicativo em React!</p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
