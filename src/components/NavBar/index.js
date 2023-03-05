import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

function NavBar()  {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const path = splitLocation[1];

    const [isActive, setisActive] = React.useState(false);

    return (

        <section className="navigation">

        <nav className="navbar is-transparent sticky-nav pt-4">
          <div className="navbar-brand">
    
            <a 
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button" 
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`} 
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false">

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
    
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item navbar-hover">
                <a className= {path === "" ? "navbar-item mr-6 pt-1 navbar-active" : "navbar-item mr-6 pt-1"} href="/">
                  Home
                </a>
    
                <a className={path === "education" ? "navbar-item mr-6 pt-1 navbar-active" : "navbar-item mr-6 pt-1"} href="/education">
                  Education
                </a>
    
                <a className={path === "certifications" ? "navbar-item mr-6 pt-1 navbar-active" : "navbar-item mr-6 pt-1"} href="/certifications">
                  Certifications
                </a>
    
                <a className={path === "contact" ? "navbar-item mr-6 pt-1 navbar-active" : "navbar-item mr-6 pt-1"} href="/contact">
                  Contact me
                </a>
    
              </div>
            </div>
          </div>
        </nav>
      </section>

    );
}

export default NavBar;