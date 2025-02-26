import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <div className="promo__section" id="promo">
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

      <div className="promo__section2">
        <div className="left__side">
          <img
            src={require("../assets/shape__dot_blue5.png")}
            alt="wave"
            className="img__dot__bds"
          />

          <img
            src={require("../assets/shape__wave_blue1.png")}
            alt="DOT"
            className="img__wave__wav"
          />

          <h1 className="left__side__h1">Todays Promotion!</h1>
          <h3 className="left__side__h3">$ 35,90</h3>
          <p className="left__side__p">
            Check your best products. Becasue <br /> today we have an special
            promotion!
          </p>
          <button className="left__side__btn">order now</button>

          <img
            src={require("../assets/shape_bal__blue1.png")}
            alt="circle"
            className="img__wave__ball"
          />
        </div>

        <div className="right__side">
          <img
            src={require("../assets/shape_bal__blue1.png")}
            alt="wave"
            className="rightside__img__dot"
          />

          <img
            src={require("../assets/promo__section2.png")}
            alt="sushi"
            className="img__right__side"
          />

          <img
            src={require("../assets/shape__dot_blue2.png")}
            alt="dot"
            className="img__dot__rightside__dot"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
