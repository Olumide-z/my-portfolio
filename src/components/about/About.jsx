import React from "react";
import { Title } from '../index';
import './about.css';


const About = () => {
  return (
    <div className="about" id="about">
    <div className="about__content">
      <Title title='About Me' />
      <div className="about__me">
        <p>
          I am a very ambitious front-end developer with some experience
          building pixel perfect websites and UIs.
        </p>
        <p>
          I'm quietly confident, naturally curious, and Focused on helping agile
          teams with UI development for large scale web apps.
        </p>
        <p>
          I live in Lagos, Nigeria and i am looking for a role in established IT
          company with the opportunity to work with the latest technologies on
          challenging and diverse projects.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
