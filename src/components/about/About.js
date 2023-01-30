import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about__section'>
            <div className='about__section_1'>

                <img
                    src={require("../assets/shape__dot1.png")}
                    alt="dot form"
                    className="about__section_IMG1"
                />

                <img
                    src={require("../assets/shape__wave1.png")}
                    alt="wave form"
                    className="about__section_IMG2"
                />


                <h1 className='about__section_h1'>
                    statistics
                </h1>
                <p className='about_section_p'>
                    our company have a lot of proud, with the clients <br />
                    feedbacks we have exelents resuls:
                </p>

                <div className='about__section__points__grid'>
                    <img
                        src={require("../assets/card1.png")}
                        alt="cirle form"
                        className="about__section__card"
                    />
                    <img
                        src={require("../assets/card2.png")}
                        alt="circle form"
                        className="about__section__card"
                    />
                    <img
                        src={require("../assets/card3.png")}
                        alt="circle form"
                        className="about__section__card"
                    />
                </div>

                <img
                    src={require("../assets/shape_ball1.png")}
                    alt="circle form"
                    className="about__section_IMG3"
                />
                <img
                    src={require("../assets/shape__dot1.png")}
                    alt="dot form"
                    className="about__section_IMG4"
                />
                <img
                    src={require("../assets/shape__wave1.png")}
                    alt="wave form"
                    className="about__section_IMG5"
                />
                <img
                    src={require("../assets/shape_ball1.png")}
                    alt="circle form"
                    className="about__section_IMG6"
                />
            </div>

            <div className='about__section_2'>
                <img
                    src={require("../assets/about--img.png")}
                    alt="person"
                    className="about__section2_IMG1"
                />

                <p className='about_section2_p'>
                    if you a culinary fan, if you like to spend time <br />
                    in your kitchen ,you likely find tourself looking for <br />
                    reliable resources througn wich you can
                </p>

                <h1 className='about__section2_h1'>
                    phoebe frazier
                </h1>
            </div>

        </div>
    )
}

export default About;