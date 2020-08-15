import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-comp comp" id="contact">
        <div className="contact-card">
          <h1> Get in touch </h1>
          <p>
            If you wanna get in touch, send an email to{" "}
            <a
              className="a-tag-normal"
              href="mailto:nishanttilve@gmail.com"
              target="_blank"
            >
              nishanttilve@gmail.com
            </a>
          </p>
          <em>or</em>
          <br />
          <p>Ping me up on Twitter or Linkedin</p>

          <h3>My Socials: </h3>
          <div className="socials-div">
            <a href="https://twitter.com/niche_nt" target="_blank">
              <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-tilve/"
              target="_blank"
            >
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
            </a>
            <a href="https://github.com/Antimatter98" target="_blank">
              <i className="fa fa-github-square fa-3x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
