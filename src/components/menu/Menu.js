import { React } from "react";
import "./Menu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nav">
      <img
        src={require("../assets/logo.png")}
        alt="logo"
        className="logo__img"
      />

      <ul className="navbar">
        <li className="navbar__itens">
          <Link to={"/"} className="navbar_LK">home</Link>
        </li>
        <li className="navbar__itens">
        <Link to={"/product"} className="navbar_LK">product</Link>
        </li>
        <li className="navbar__itens">promo</li>
        <li className="navbar__itens">about</li>
        <li className="navbar__itens">contact</li>
      </ul>
    </div>
  );
};

export default Menu;
