import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Product from "./components/product/Product";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Menu />
      
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exatc path="/product" element={<Product />} />
        <Route exatc path="/promo" element={<Promo />} />
        <Route exatc path="/about" element={<About />} />
        <Route exatc path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
