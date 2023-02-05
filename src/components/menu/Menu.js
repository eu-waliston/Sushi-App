import React from "react";

import "./Menu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

/*
  toggle infos 
  State
  const [isNavExpanded, setIsNavExpanded] = React.useState(false)

  toToggle
  {isNavExpanded ? "nav" : "nav__responsive"}
  {isNavExpanded ? "navbar" : "navbar__responsive"}

  onClick
  onClick={() => {setIsNavExpanded(!isNavExpanded)}}
*/

const Menu = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState("nav")

  const toggleClass = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <div className={isNavExpanded ? "nav" : "nav__responsive"}>
      <i className="bi bi-list" onClick={toggleClass}></i>
      <img
        src={require("../assets/logo.png")}
        alt="logo"
        className="logo__img"
      />

      <ul className={isNavExpanded ? "navbar" : "navbar__responsive"}>
        <li className="navbar__itens">
          <Link to={"/"} className="navbar_LK">
            home
          </Link>
        </li>
        <li className="navbar__itens">
          <Link to={"/product"} className="navbar_LK">
            products
          </Link>
        </li>

        <li className="navbar__itens">
          <Link to={"/promo"} className="navbar_LK">
            promo
          </Link>
        </li>
        <li className="navbar__itens">
          <Link to={"/about"} className="navbar_LK">
            about
          </Link>
        </li>
        <li className="navbar__itens">
          <Link to={"/contact"} className="navbar_LK">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
