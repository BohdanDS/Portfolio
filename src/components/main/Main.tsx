import React from 'react';
import style from './Main.module.css'
import {Link} from 'react-scroll';


const Main = () => {
    return (
        <div className={style.mainBlock} id='main'>
            <div className={style.container}>
                <div className={style.greeting}>
                    <p>Hi, I am </p>
                    <h1>
                        <span>Bohdan Peliutkevich</span>
                    </h1>
                    <div className={style.links}>
                        <div className={style.primaryLink}>
                            {/*<a href={'213'}>View My Projects</a>*/}
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >View My Projects</Link>
                        </div>
                        <div className={style.secondaryLink}>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Contact Me</Link>
                        </div>
                    </div>
                </div>
                <div className={style.photo}>
                    <img className={style.photoImage}
                         src='http://demo.harnishdesign.net/html/callum/images/web-developer.jpg'/>
                </div>
            </div>
        </div>
    );
};

export default Main;