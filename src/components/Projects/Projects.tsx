import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectContainer}>
                <h3>Projects</h3>
                <div className={style.projects}>
                    <Project projectTitle={'Project 1'}
                             projectDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}/>
                    <Project projectTitle={'Project 2'}
                             projectDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;