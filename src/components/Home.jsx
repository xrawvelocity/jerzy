import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        
        <div className="home-content">
          <div className="home-content_cta">
            <h1 className="home-content_cta-text">
              Hello. My name is Jerzy and I am a creative based in Miami, FL
              with a passion for capturing emotion in a photo or a video.
            </h1>
            <div className="home-content_cta-btn"><Link to="/contact">Shedule appointment</Link></div>
            <img
              className="home-content_cta-img"
              src="./images/camerapic.png"
              alt="background"
            />
          </div>
        </div>
      </section>
    );
  }
}
