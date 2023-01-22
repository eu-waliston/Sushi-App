import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
        <Menu />

        <Routes>
            <Route exact path="/"  element={ <Main />}/>
        </Routes>
    </div>
  );
}

export default App;
