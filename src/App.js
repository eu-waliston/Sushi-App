import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Product from "./components/product/Product";
import Promo from "./components/promo/Promo";

function App() {
  return (
    <div className="App">
      <Menu />

      
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exatc path="/product"  element={ <Product />}/>
          <Route exatc path="/promo"  element={ <Promo />}/>
        </Routes>
    </div>
  );
}

export default App;
