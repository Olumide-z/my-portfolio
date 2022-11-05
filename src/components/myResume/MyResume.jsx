import Skill from '../skills & education/skill/Skill';
import './myResume.css';

import { BsTelephone, BsEnvelope } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi'

const MyResume = () => {
  return (
    <div className="myResume">
        <div>
        <h1>OLUMIDE<span> ILESANMI</span></h1>
        <p>FRONTEND DEVELOPER</p>

        <div className="myResume__info">
            <p><BsTelephone /> +234 814 014 4314</p>
            <p><BsEnvelope /> olumideilesanmi10@gmail.com</p>
            <p><HiOutlineLocationMarker /> Lagos, Nigeria.</p>
        </div>

        </div>

        <div className="myResume__profile">
            <h3>PROFILE</h3>
            <p>
                I am a very ambitious front-end developer with some experience in building pixel perfect websites and UIs using JavaScript, HTML5, CSS, Frameworks like React Js and modern libraries.
            </p>
        </div>

        <div className="myResume__technical">
            <h3>Technical Skills</h3>
            <Skill big position/>
        </div>

        <div className="myResume__education">
            <h3>Education</h3>
            <div>
                <div className="university">
                    <p>BTech - Buiding Tech</p>
                    <p>Federal University of Technology</p>
                    <p>2014 - 2019</p>
                </div>
                <div className="highSchool">
                    <p>Senior Secondary CertiFcate of Education</p>
                    <p>Damre Unique College</p>
                    <p>2008 - 2013</p>
                </div>
            </div>
        </div>

        <div className="myResume__workExperience">
            <h3>Work Experience</h3>
        </div>

        <div className="myResume__softSkills">

            <h3>Soft skills</h3>
            <div className="softSkills">
            <div>
                <p>Good communication skills</p>
                <p>Great attention to detail</p>
                <p>Desire and willingness to learn</p>
            </div>
            <div>
                <p>Ability to give clear feedback</p>
                <p>Willingness to accept feedback</p>
            </div>
            </div>

        </div>

        <div className="myResume__footer">
            <p><span>Github Profile: </span><a href='https://github.com/Olumide-z' target='_blank' className='link'>https://github.com/Olumide-z</a></p>
            <p><span>Portfolio Website: </span><a href='#' target='_blank' className='link'>Link</a></p>
        </div>

    </div>
  )
}

export default MyResume