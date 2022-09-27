import React from "react";
import { Title } from "../index";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__content">
        <Title title="My Skills" />
        <div className="skills__list">
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>Github</li>
            <li>Redux and Redux Toolkits</li>
            <li>Material UI</li>
            <li>Styled Components</li>
            <li>SASS</li>
            <li>Bootstraps</li>
          </ul>
        </div>
      </div>
      <div className="education">
        <Title title='Education' />
        <div className="education__list">
          <p><span>Federal University of Technology, Akure</span> · April 2014 · December 2019</p>
          <p><span>Damre Unique College</span> ·  null 2008 · null 2013</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
