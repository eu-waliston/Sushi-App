import React from "react";
import "./Product.css";

const Product = () => {
    return (
        <div className="product__section">
            <img src={require("../assets/shape__wave1.png")} alt="item" className="shape__wave1"/>
            <img src={require("../assets/shape__dot1.png")} alt="item" className="shape__dot1"/>
            <img src={require("../assets/shape_ball1.png")} alt="item" className="shape__ball1"/>

            <h1 className="product__h1">
                popular menu
            </h1>

            <div className="grid__item">

                <div className="grid__group">
                    <img src={require("../assets/menu__item1.png")} alt="sushi type" className="pic"/>
                    <h3>California roll</h3>
                    <p>Crab/imitation, avocado, cucumber</p>
                </div>

                <div className="grid__group">
                    <img src={require("../assets/menu__item2.png")} alt="sushi type" className="pic"/>
                    <h3>Spicy tuna roll</h3>
                    <p>Tuna, spicy mayo</p>
                </div>

                <div className="grid__group">
                    <img src={require("../assets/menu__item3.png")} alt="sushi type" className="pic"/>
                    <h3>Rainbow roll</h3>
                    <p> Crab, tuna, salmon, shrimp, yellowtail, avocado, cucumber</p>
                </div>



                <div className="grid__group">
                    <img src={require("../assets/menu__item4.jpg")} alt="sushi type" className="pic S2"/>
                    <h3>Sushirrito</h3>
                    <p>  Part sushi, part burrito. These creations include the concept and fillings of sushi but in the form of a burrito</p>
                </div>

                <div className="grid__group">
                    <img src={require("../assets/menu__item5.jpg")} alt="sushi type" className="pic S2"/>
                    <h3>Fruit sushi (frushi)</h3>
                    <p> Sweet and refreshing rolls. Combination of fruit rolled in sweet rice, sometimes flavored with coconut and vanilla for added sweetness.</p>
                </div>

                <div className="grid__group">
                    <img src={require("../assets/menu__item6.jpg")} alt="sushi type" className="pic S2"/>
                    <h3>Tiger (shrimp tempura) roll </h3>
                    <p>  Yellowtail, shrimp tempura, bean sprouts, carrots, avocado, cucumber, chili, spicy mayo</p>
                </div>
            </div>

            <img src={require("../assets/shape__dot4.png")} alt="item" className="shape__dot2"/>
            <img src={require("../assets/shape__wave1.png")} alt="item" className="shape__wave2"/>
            <img src={require("../assets/shape_ball1.png")} alt="item" className="shape__ball2"/>
        </div>
    )
}

export default Product;