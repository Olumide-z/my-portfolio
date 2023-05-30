import React from 'react';
import './footer.css';
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__content">
            <div className="footer__content-1">
                <h3>Olumide Ilesanmi</h3>
                <p>A Frontend focused Web Developer building the Frontend sides of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className="footer__content-2">
                <ul>
                    <li><a href='mailto:olumideilesanmi10@gmail.com' target='__blank'>olumideilesanmi10@gmail.com</a><span> · Email</span></li>
                    <li><a href="https://wa.me/2348140144314" target='__blank'>+(234) 814 014 4314</a><span> · Mobile</span></li>
                    <li><a href='https://drive.google.com/file/d/1BreGs6Ewx2IjHyESyWPg2nWbNiReqk0O/view?usp=share_link' target='__blank'>Save a copy of my resume</a></li>
                </ul>
                <div className="footer__content-2--icons">
                    <a href='https://twitter.com/Who_is_Emrys' target='__blank'><FaTwitter /></a>
                    <a href="https://wa.me/2348140144314" target='__blank'><FaWhatsapp /></a>
                    <a href="https://github.com/Olumide-z" target='__blank'><FaGithub /></a>
                    <a href="https://linkedin.com/in/olumide-ilesanmi-10026a207" target='__blank'><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
        <p className='footer__copy'>&copy; Olumide Ilesanmi. All rights reserved.</p>
        <span className="bottom-tags">&lt;/body&gt;</span>
    </div>
  )
}

export default Footer