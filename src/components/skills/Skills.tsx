import React from 'react';
import style from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'} description={'Description 1 loren ipsum dolar sit omet lll'}/>
                    <Skill title={'JS/TS'} description={'Description 2'}/>
                    <Skill title={'React'} description={'Description 3'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;