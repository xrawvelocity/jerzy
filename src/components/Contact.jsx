import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <form class="form" action="https://formspree.io/xjvojgwr" method="POST">
          <h2 className="title">
            Send me a message so I can reach back to you
          </h2>
          <div className="group">
            <input type="text" name="name" size="25" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>

          <div className="group">
            <input
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="_replyto"
              size="25"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div className="group">
            <input
              type="text"
              autocapitalize="off"
              autocorrect="off"
              name="message"
              size="25"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Message</label>
          </div>
          <button class="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
