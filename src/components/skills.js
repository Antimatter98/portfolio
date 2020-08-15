import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

class Skills extends Component {
  render() {
    return (
      <div className="skills-comp comp" id="skills">
        <h1 className="skills-title">Skills 👨‍💻</h1>
        <div className="project-cards-container">
          <div className="project-card">
            <div className="skills-tag-container">
              <p className="skills-tag">html5</p>
              <p className="skills-tag">css3</p>
              <p className="skills-tag">javascript</p>
              <p className="skills-tag">react.js</p>
              <p className="skills-tag">node.js</p>
              <p className="skills-tag">express.js</p>
              <p className="skills-tag">sql</p>
              <p className="skills-tag">nosql</p>
              <p className="skills-tag">python</p>
              <p className="skills-tag">php</p>
              <p className="skills-tag">c</p>
              <p className="skills-tag">c++</p>
              <p className="skills-tag">java</p>
              <p className="skills-tag">c#</p>
              <p className="skills-tag">git vcs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
