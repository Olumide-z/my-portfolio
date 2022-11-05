import React, { useEffect, useState } from "react";
import "./header.css";
import {IoIosArrowDown} from 'react-icons/io'

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetingsArray = ['H','i',' ','T','h','e','r','e',',',' '];
  const nameArray = ['I',"'",'m',' ','O', 'l', 'u', 'm', 'i', 'd', 'e', ' ', 'I', 'l', 'e', 's', 'a', 'n', 'm', 'i','.']
  const jobArray = ['A',' ','F','r','o','n','t','e','n','d',' ','D','e','v','e','l','o','p','e','r',',']
  
  useEffect(() => {
    setTimeout(() => {
        return  setLetterClass('text-animate-hover');
    }, 6000)
}, []);

  return (
    <div className="container">
    <div className="header">
      <div className="header__title">
        <div className="header__title-info">
        <h2 className="top-tags">&lt;body&gt;</h2>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={greetingsArray} idx={12}/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={19}/> <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={40}/></h1>
        </div>
        <h3 className="header__location">based in Lagos, Nigeria.</h3>
        <a href='#works*'><button className="header__btn">PROJECTS</button></a>
      </div>
    </div>
    <div className="header__icon">
          <IoIosArrowDown />
        </div>
    </div>
  );
};

export default Header;
