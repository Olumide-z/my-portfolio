import React from "react";
import { Title } from "../index";
import Skill from "./skill/Skill";
import "./skills.css";

import { skills } from "./data";


const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__content">
        <Title title="My Skills" />
        <div className="mySkills">
        {skills.map((skill) => (
            <Skill key={skill.id} skill={skill}/>
        ))}
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
