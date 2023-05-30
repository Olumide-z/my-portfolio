import React, { useState } from "react";
import Title from "../title/Title";
import {BiRightArrow} from 'react-icons/bi';
import { data } from "./data";
import "./projects.css";

import Bounce from 'react-reveal/Bounce';

const Projects = () => {
  const [projects, setProjects] = useState(data);

  return (
    <div className="projects" id="works">
      <div className="projects__content">
        <Title title='Works' />

        <Bounce left>
        {projects.map((work) => (
          <div className="projects__works" key={work.id}>

            <div className="projects__works-col-1">
              <div className="projects__details">
                <h3>* {work.name} <span>Website</span></h3>
                <p>{work.details}</p>
                <div className="links">
                  <a href={work.siteUrl} target='_blank'><p>Launch Site</p> <BiRightArrow className="links__icon"/></a>
                  <a href={work.github} target='_blank'><p>Github Link</p><BiRightArrow className="links__icon"/></a>
                </div>
                <div className="stack">
                  {work.stacks.map((stack, index) => (
                    <p key={stack.id}>{stack.name}</p>
                  ))}
                </div>

              </div>
            </div>

            <div className="projects__works-col-2">
              <img src={work.image} alt='image' />
            </div>

          </div>
        ))}
        </Bounce>

      </div>
    </div>
  );
};

export default Projects;
