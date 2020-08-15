import React, { Component } from "react";

class NavBar extends Component {
  section = "";
  sections = {};
  homeOffsetBottom = 0;

  componentDidMount() {
    this.section = document.querySelectorAll(".comp");

    //shorthand for Array.prototype
    [].forEach.call(this.section, (item) => {
      this.sections[item.id] = item.offsetTop;
      if (item.id === "home") {
        this.homeOffsetBottom = item.offsetTop;
      }
    });

    window.addEventListener("scroll", this.navLinkHighlighter);
  }

  //function to highlight active navlinks
  navLinkHighlighter = () => {
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let i in this.sections) {
      if (
        this.sections[i] <= scrollPosition &&
        document.querySelector(".active")
      ) {
        document.querySelector(".active").setAttribute("class", "");
        document
          .querySelector("a[href*=" + i + "]")
          .setAttribute("class", "active");
      }

      if (scrollPosition > this.homeOffsetBottom) {
        document.querySelector(".navbar p").style.display = "block";
      } else {
        document.querySelector(".navbar p").style.display = "none";
      }
    }
  };

  toggleNavButton() {
    let x = document.getElementsByClassName("navbar")[0];
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
        <p>Nishant Tilve</p>
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
        <a
          className="active"
          href="#home"
          onClick={this.homeClicked}
          style={{ cursor: "pointer" }}
        >
          Home
        </a>
        <div className="menu-icon" onClick={this.toggleNavButton}>
          <i className="fa fa-bars"> </i>
        </div>
      </div>
    );
  }
}

export default NavBar;
