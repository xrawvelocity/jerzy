import React, { Component } from "react";
// import { Parallax } from "react-parallax";
// import { Parallax } from "react-scroll-parallax";
import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="navigation">
          <Link to="/" className="navigation-logo">Logo Here</Link>
          <div className="navigation-links">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/projects"
            render={(props) => <Projects {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
