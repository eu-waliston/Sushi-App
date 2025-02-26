import "../App.css";
import { Routes, Route } from "react-router-dom";

import Main from "../components/main/Main";
import Product from "../components/product/Product";
import Promo from "../components/promo/Promo";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

function Rotas() {
    return (
        <Routes>
        <Route exact path="/" element={[<Main />, <Product />, <Promo />, <About />, <Contact />]} />
        <Route exact path="/" element={<Main />} />
        <Route exatc path="/product" element={<Product />} />
        <Route exatc path="/promo" element={<Promo />} />
        <Route exatc path="/about" element={<About />} />
        <Route exatc path="/contact" element={<Contact />} />
      </Routes>
    )
}

export default Rotas;