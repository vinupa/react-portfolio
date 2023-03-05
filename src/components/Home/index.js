import React from "react";
import "../../index.css";
import image from "../../images/Vinupa_img.jpg"

function Home()  {
    return (
        <section className="hero">

        <div className="pt-6 has-text-centered is-hidden-desktop">
        <figure className="hero-image is-inline-block" style={{width: "19rem", height: "19rem"}}>
            <img src={image} alt="image" />
        </figure>
        </div>

        <div className="columns is-centered pt-5">

        <div className="column p-6 has-text-right is-hidden-touch">
            <figure className="hero-image is-inline-block">
            <img src={image} alt="image-mobile" />
            </figure>
        </div>

        <div className="column px-6 is-align-self-center has-text-centered-touch">
            <p className="title-tech">Tech Enthusiast</p>
            <h5 className="title title-name">Vinupa Thenuka
            </h5>
            <p className="title-info is-hidden-mobile mb-3">
            Undergraduate student studying Bachelor of Information Systems at University of Colombo
            School of Computing</p>

            <div className="buttons is-inline-block is-hidden-tablet">

            <a className="button is-dark is-rounded p-5" style={{border: "4px solid #806198", fontSize: "large", marginRight: "0px"}}>
                <i className="fa-brands fa-github mr-3"></i>
                GitHub
            </a>

            <a className="button is-dark is-rounded p-5" style={{border: "4px solid #806198", fontSize: "large"}}>
                <i className="fa-brands fa-linkedin mr-3"></i>
                LinkedIn
            </a>

            </div>

            <div className="buttons is-inline-block is-hidden-mobile">

            <a className="button is-dark is-rounded p-5 mr-2" style={{border: "4px solid #806198", fontSize: "large"}}>
                <i className="fa-brands fa-github mr-3"></i>
                GitHub
            </a>

            <a className="button is-dark is-rounded p-5" style={{border: "4px solid #806198", fontSize: "large"}}>
                <i className="fa-brands fa-linkedin mr-3"></i>
                LinkedIn
            </a>

            </div>

        </div>

        </div>
        </section>
        
    );
}

export default Home;