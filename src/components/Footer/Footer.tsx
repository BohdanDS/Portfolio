import React from 'react';
import style from './Footer.module.css'
import github from '../../Assets/socialIcons/free-icon-github-1051377.png'
import linkedIn from '../../Assets/socialIcons/free-icon-linkedin-1051384.png'
import gmail from '../../Assets/socialIcons/free-icon-google-plus-1051386.png'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <span>Bohdan Peliutkevich</span>
            <div className={style.links}>
                <a href={'https://www.linkedin.com/in/bohdan-peliutkevich/'}><img src={linkedIn}/></a>
                <a href={'https://github.com/BohdanDS'}><img src={github}/></a>
                <a href={'mailto:bohdanpeliutkevich@gmail.com'}><img src={gmail}/></a>
            </div>
            <span>© All Right Reserved</span>
        </div>
    );
};

export default Footer;