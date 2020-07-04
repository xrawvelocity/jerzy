import React, { Component } from "react";
import { Parallax, withController } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home-content">
          <div className="home-content_cta">
            <Parallax y={[-40, 40]} tagInner="figure">
              <h1 className="home-content_cta-text">
                <span className="home-content_cta-text_top">Jerzy</span>
                <span className="home-content_cta-text_middle">Moralez</span>
              </h1>

              <div className="home-content_cta-text_bottom">photo and video</div>
            </Parallax>
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

export default withController(Home);
