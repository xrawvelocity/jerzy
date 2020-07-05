import React, { Component } from "react";
import { Parallax, withController } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  state = {
    popup: "",
  };

  loadProjects = () => {
    return [...Array(9)].map((each, index) => {
      let random = [...Array(9)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");
      return (
        <Parallax
          y={index % 2 ? [-50 + "px", 50 + "px"] : [50 + "px", -50 + "px"]}
          x={index % 2 ? [-150 + "px", 150 + "px"] : [150 + "px", -150 + "px"]}
          tagInner="figure"
          className="projects-card"
        >
          <img
            loading="lazy"
            onClick={() => {
              this.setState({
                popup: `https://picsum.photos/seed/${random}/1980/1080`,
              });
            }}
            onLoad={() => this.props.parallaxController.update()}
            className="projects-card-img"
            src={`https://picsum.photos/seed/${random}/1980/1080`}
            alt="random"
          />
          <div className="projects-card-img_bg"></div>
        </Parallax>
      );
    });
  };

  render() {
    return (
      <div className="projects">
        {this.loadProjects()}
        {this.state.popup !== "" && (
          <div className="projects-popup">
            <img
              src={this.state.popup}
              alt="project"
              className="projects-popup_image"
            />
            <FontAwesomeIcon
              onClick={() => {
                this.setState({ popup: "" });
              }}
              icon={faTimes}
              className="projects-popup_close"
            />
          </div>
        )}
      </div>
    );
  }
}

export default withController(Projects);
