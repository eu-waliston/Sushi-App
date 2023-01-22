import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main__section">
      <h className="main__h1">
        <span> <img src={require("../assets/logo.png")} alt="logo" className="main__logo"/> Imperium</span> Sushi
      </h>

      <p className="main__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non urna
        suscipit, viverra nibh vitae,
        <br /> molestie elit. Suspendisse egestas lacus dolor. Aenean fermentum
        ante arcu, eget sagittis ipsum <br /> accumsan in. Cras sed dolor a ex
        auctor lobortis. Etiam auctor euismod tincidunt.
      </p>

      <button className="main__btn">order now</button>
    </div>
  );
};

export default Main;
