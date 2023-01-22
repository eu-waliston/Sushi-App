import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main__section">
      <h className="main__h1">
        <span> <img src={require("../assets/logo.png")} alt="logo" className="main__logo"/>Luscious Yakitori</span>
      </h>

      <h4 className="main__p">
      Sushi & Restaurant
      </h4>

      <button className="main__btn">order now</button>
    </div>
  );
};

export default Main;
