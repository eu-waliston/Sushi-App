import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact__section">
            <div className="contact__inside__section1">
                <div className="form__section">

                    <img src={require("../assets/shape__dot_blue5.png")} alt="item" className="contact__img1" />

                    <img src={require("../assets/shape__wave_blue1.png")} alt="item" className="contact__img2" />

                    <img src={require("../assets/shape_bal__blue1.png")} alt="item" className="contact__img3" />

                    <div className="subs__form">
                        <h1 className="sub__h1">
                            Subscribe
                        </h1>
                        <p className="subs__p">
                            subscribe to reeceiv your news and promotions, <br />everyday we send emails with promotions and <br />  delivery combos. come to us!
                        </p>
                        <input type={"text"} placeholder={"Your Email"} className="sub__input" />
                        <button className="subs__btn">subscribe</button>
                    </div>

                    <img src={require("../assets/shape__wave_blue1.png")} alt="item" className="contact__img4" />

                    <img src={require("../assets/shape_bal__blue1.png")} alt="item" className="contact__img5" />


                </div>
                <div className="map__section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.56397638656!2d-121.58299522449346!3d38.56165048089482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1675040249985!5m2!1spt-BR!2sbr" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map__style" />

                </div>
            </div>
            <div className="contact__inside__section2">
                <div className="footer__grid">
                <img src={require("../assets/logo.png")} alt="logo" className="logo__foter" />
                    <div className="footer__pt1">
                        <h4>Lucius Yakitori</h4>
                        <p id="ds">
                            for more informations follow us! <br />
                            or if you have some questions <br />
                            or sugestions everything is great! <br />
                        </p>
                        <i class="bi bi-instagram icns__ico"></i>
                        <i class="bi bi-facebook icns__ico"></i>
                        <i class="bi bi-twitter icns__ico"></i>
                        <i class="bi bi-whatsapp icns__ico"></i>
                    </div>
                    <div className="footer__pt2">
                        <h4>
                            About
                        </h4>
                        <p>history</p>
                        <p>our team</p>
                        <p>brand guiderlines</p>
                        <p>terms & conditions</p>
                        <p>privacy policy</p>
                    </div>
                    <div className="footer__pt3">
                        <h4>Services</h4>
                        <p>how to order</p>
                        <p>our product</p>
                        <p>order status</p>
                        <p>promo</p>
                        <p>payment method</p>
                    </div>
                    <div className="footer__pt4">
                        <h4>other</h4>
                        <p>contact us</p>
                        <p>help</p>
                        <p>privacy</p>
                    </div>

                    <h5 className="dev">Developed by &copy; WeSantos</h5>
                </div>
            </div>
        </div>
    )
}

export default Contact;