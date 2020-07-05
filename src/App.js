import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="navigation">
          <div className="navigation-logo">
            <Link to="/">
              <FontAwesomeIcon icon={faCamera} />
            </Link>
          </div>
          <div className="navigation-links">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Home {...props} />
                <Projects {...props} />
                <About {...props} />
                <Contact {...props} />
              </Fragment>
            )}
          />
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
