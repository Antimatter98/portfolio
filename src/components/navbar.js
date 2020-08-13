import React, { Component } from "react";

class NavBar extends Component {
  toggleNavButton() {
    let x = document.getElementsByClassName("navbar")[0];
    console.log(x);
    if (x !== undefined && x !== null) {
      if (x.className === "navbar") {
        x.className += " responsive";
        if (window.innerWidth <= "600px") {
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }
      } else {
        x.className = "navbar";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
    }
  }

  homeClicked = (e) => {
    e.preventDefault();
    this.toggleNavButton();
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="navbar">
        <a href="#contact" onClick={this.toggleNavButton}>
          Contact
        </a>
        <a href="#skills" onClick={this.toggleNavButton}>
          Skills
        </a>
        <a href="#projects" onClick={this.toggleNavButton}>
          Work
        </a>
        <a href="#about" onClick={this.toggleNavButton}>
          About
        </a>
        <a href onClick={this.homeClicked} style={{ cursor: "pointer" }}>
          Home
        </a>
        <div className="menu-icon" onClick={this.toggleNavButton}>
          <i className="fa fa-bars"> </i>
        </div>
        <div className="close-menu-icon" onClick={this.toggleNavButton}>
          <i className="fa fa-cross" id="icon"></i>
        </div>
      </div>
    );
  }
}

export default NavBar;
