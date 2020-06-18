import React, { Component } from "react";
import { Parallax, withController } from "react-scroll-parallax";

class Projects extends Component {
  state = {
    popup: "",
  };
  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  loadProjects = () => {
    return [...Array(30)].map((each, index) => {
      console.log(this.randomNumber(50, 70));
      let random = [...Array(30)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");
      return (
        <Parallax
          y={index % 2 ? [-120 + "px", 120 + "px"] : [120 + "px", -120 + "px"]}
          x={index % 2 ? [-200 + "px", 200 + "px"] : [200 + "px", -200 + "px"]}
          tagInner="figure"
          className="projects-card"
        >
          <img
            onClick={() => {
              this.setState({
                popup: `https://picsum.photos/seed/${random}/500/400`,
              });
            }}
            onLoad={() => this.props.parallaxController.update()}
            className="projects-card-img"
            src={`https://picsum.photos/seed/${random}/500/400`}
            alt="random"
          />
        </Parallax>
      );
    });
  };

  render() {
    return (
      <div className="projects">
        {this.loadProjects()}
        {this.state.popup && <div>yo</div>}
      </div>
    );
  }
}

export default withController(Projects);
