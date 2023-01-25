import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <div className="promo__section">
      <div className="promo__section1">
        <div className="left__side">
          <img
            src={require("../assets/shape_bal__blue1.png")}
            alt="circle form"
            className="left__sideIMG1"
          />
          <img
            src={require("../assets/promo__section1.png")}
            alt="sushi"
            className="left__sideIMG2"
          />
          <img
            src={require("../assets/shape__dot_blue2.png")}
            alt="dot form"
            className="left__sideIMG3"
          />
        </div>

        <div className="right__side">
          <img
            src={require("../assets/shape__wave_blue1.png")}
            alt="circle form"
            className="right__side__IMG1"
          />
          <h1 className="right__side__h1">Todays Promotion!</h1>
          <h3 className="right__side__h3">$ 35,90</h3>
          <p className="right__side__p">
            Check your best products. Becasue <br /> today we have an special
            promotion!
          </p>
          <button className="right__side__btn">order now</button>
          <img
            src={require("../assets/shape__dot_blue2.png")}
            alt="circle form"
            className="right__side__IMG2"
          />
          <img
            src={require("../assets/shape_bal__blue1.png")}
            alt="circle form"
            className="right__side__IMG3"
          />
        </div>
      </div>
      <div className="promo__section2"></div>
    </div>
  );
};

export default Promo;
