import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
