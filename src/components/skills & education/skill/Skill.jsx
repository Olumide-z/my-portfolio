import "./skill.css";

import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiMaterialui, SiStyledcomponents } from 'react-icons/si';


const Skill = ({ big, position }) => {
  return (
    <div className="skills__list">
      <ul className={position ? 'list2' : 'lists'}>
        <li className={ big ? 'bigList' : 'smallList' }>
          <AiOutlineHtml5 className="skills__icon" /> HTML5
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <FaCss3Alt className="skills__icon" /> CSS3
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <SiJavascript className="skills__icon" /> JavaScript
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <FaReact className="skills__icon" /> React
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <FaGitAlt className="skills__icon" /> Git
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <SiRedux className="skills__icon" /> Redux and Redux Toolkits
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <SiMaterialui className="skills__icon" /> Material UI
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <SiStyledcomponents className="skills__icon" /> Styled Components
        </li>
        <li className={ big ? 'bigList' : 'smallList' }>
          <FaSass className="skills__icon" /> SASS
        </li>
      </ul>
    </div>
  );
};

export default Skill;
