import React, { Component } from "react";

import Nishant from "./photos/nishanttilve.jpg";
class About extends Component {
  render() {
    return (
      <div className="about-comp comp" id="about">
        <img src={Nishant} className="photo-container" alt="profile-photo" />
        <h1>About me</h1>
        <p className="about-content">
          Hi! 👋🏼 I'm Nishant Tilve, a Full Stack web developer based out of Goa.{" "}
          <br />I specialize in efficiently blending together React and Node to
          build and scale amazing Web Applications and Services. Right now I'm
          on a lookout for some early stage teams to join.
        </p>
      </div>
    );
  }
}

export default About;
