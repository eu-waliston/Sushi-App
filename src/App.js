import React from "react";
import "./App.css";
import Rotas from "./Routes/Rotas.jsx"
import Menu from "./components/menu/Menu";
function App() {
  return (
    <div className="App">
      <Menu />
      <Rotas />
    </div>
  );
}

export default App;
