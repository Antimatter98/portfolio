import React, { Component } from "react";

import PocketCalendar from "./photos/pocket-calendar.jpg";
import CoronaTracker from "./photos/coronatracker.jpg";
import CoronaTrackerGoa from "./photos/coronatracker-goa.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="projects-comp comp" id="projects">
        <h1>Some of my projects</h1>
        <div className="project-cards-container">
          <div className="project-card">
            <h1 className="project-title">Pocket Calendar</h1>
            <img
              src={PocketCalendar}
              className="project-img"
              alt="project-image"
            />
            <p style={{ padding: "10px" }}>
              Get your bookmarks from Pocket scheduled to your Google Calendar.
              🔖➡️📆
            </p>
            <div className="skills-tag-container">
              <p className="skills-tag">react.js</p>
              <p className="skills-tag">node.js</p>
              <p className="skills-tag">express.js</p>
              <p className="skills-tag">Firebase</p>
              <p className="skills-tag">javascript</p>
              <p className="skills-tag">css3</p>
            </div>
            <div className="project-buttons">
              <a
                href="https://pocket-calendar.herokuapp.com/"
                target="_blank"
                className="project-button"
              >
                Check it out
              </a>
              <a
                href="https://www.loom.com/share/fbc2ef282797457f94050e636f692315"
                target="_blank"
                className="project-button"
              >
                Demo Video
              </a>
            </div>
          </div>

          <div className="project-card">
            <h1 className="project-title">CoronaTracker</h1>
            <img
              src={CoronaTracker}
              className="project-img"
              alt="project-image"
            />
            <p style={{ padding: "10px" }}>
              COVID-19 🦠 related statistical updates for India and the world.
            </p>
            <div className="milestones-card">
              <h3>Some milestones: 🏆</h3>

              <ul className="milestones-text">
                <li>
                  We have had over 250k user sessions with over 50k users in
                  total.
                </li>
                <li>
                  We have been covered by media houses like Republic World,
                  Indian Express and more.
                </li>
              </ul>
            </div>
            <div className="skills-tag-container">
              <p className="skills-tag">react.js</p>
              <p className="skills-tag">javascript</p>
              <p className="skills-tag">css3</p>
            </div>
            <div className="project-buttons">
              <a
                href="https://www.coronatracker.in/"
                className="project-button"
                target="_blank"
              >
                Check it out
              </a>
            </div>
          </div>

          <div className="project-card">
            <h1 className="project-title">CoronaTracker-Goa</h1>
            <img
              src={CoronaTrackerGoa}
              className="project-img"
              alt="project-image"
            />
            <p style={{ padding: "10px" }}>
              COVID-19 🦠 related localized statistical updates for Goa.
            </p>
            <div className="skills-tag-container">
              <p className="skills-tag">react.js</p>
              <p className="skills-tag">javascript</p>
              <p className="skills-tag">css3</p>
            </div>
            <div className="project-buttons">
              <a
                href="https://goa.coronatracker.in/"
                className="project-button"
                target="_blank"
              >
                Check it out
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
