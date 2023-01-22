import React from "react";
import "./Product.css";

const Product = () => {
    return (
        <div className="product__section">
            <img src={require("../assets/menu__item1.png")} alt="item" className="item__menu"/>
            <img src={require("../assets/menu__item1.png")} alt="item" className="item__menu"/>
            <img src={require("../assets/menu__item1.png")} alt="item" className="item__menu"/>
            <h1 className="product__h1">
                popular menu
            </h1>
            <p className="product__p">
                lorem ipsun dollors sit amet, consectureur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum
            </p>
            <div className="grid__item">

                <div className="grid__group">
                    <img src={require("../assets/menu__item1.png")} alt="sushi type" />
                    <h3>name</h3>
                    <p>description</p>
                </div>
            </div>

            <img src={require("../assets/menu__item1.png")} alt="item" className="item__menu"/>
            <img src={require("../assets/menu__item1.png")} alt="item" className="item__menu"/>
            <img src={require("../assets/menu__item1.png")} alt="item" className="item__menu"/>
        </div>
    )
}

export default Product;