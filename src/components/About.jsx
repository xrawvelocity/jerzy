import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Parallax className="about-text" y={[-10, 10]} tagInner="figure">
          <h1 >
            A picture is all about capturing the emotion of the subject
          </h1>
        </Parallax>
      </div>
    );
  }
}
