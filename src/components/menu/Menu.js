import React, {Fragment} from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = () => {

  const [isNavExpanded, setIsNavExpanded] = React.useState("nav");

  return (
    <Fragment>
      <i className="bi bi-list" onClick={() => { setIsNavExpanded(!isNavExpanded) }}></i>
      <div className={isNavExpanded ? "nav" : "nav__resposive"}>
        <img
          src={require("../assets/logo.png")}
          alt="logo"
          className="logo__img"
        />


        <ul className="navbar">
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
    </Fragment>
  );
};

export default Menu;
