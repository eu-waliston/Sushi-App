import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/"  element={ <MainScreen />}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas;