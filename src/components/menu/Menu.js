import { React } from "react";
import "./Menu.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Menu = () => {
  return (
    <div className="navbar">
      <img
        src={require("../assets/logo.png")}
        alt="logo"
        className="logo__img"
      />
      <ul className="navbar__itens">
        <li className="navbar__item">home</li>
        <li className="navbar__item">product</li>
        <li className="navbar__item">promo</li>
        <li className="navbar__item">about</li>
        <li className="navbar__item">contact</li>
      </ul>
    </div>
  );
};

export default Menu;
