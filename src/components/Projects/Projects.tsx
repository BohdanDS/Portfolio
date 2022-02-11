import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";
import BlockHeader from "../common/blockHeader/BlockHeader";
import todolistImage from '../../Assets/todoList.jpg'

const Projects = () => {
    return (
        <div className={style.projectBlock} id='projects'>
            <div className={style.projectContainer}>
                <BlockHeader title={'Projects'} description={'Some of my most recent projects'}/>
                <div className={style.projects}>
                    <Project projectTitle={'Project 1'}
                             projectDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
                             imageUrl={todolistImage}/>
                    <Project projectTitle={'Project 2'}
                             projectDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
                             imageUrl={todolistImage}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;