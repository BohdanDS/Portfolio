import React from 'react';
import style from './Skills.module.css'
import Skill from "./skill/Skill";
import BlockHeader from "../common/blockHeader/BlockHeader";
import image from '../../Assets/2022-02-11 14.11.23.jpg'

const Skills = () => {
    return (
        <div className={style.skillsBlock} id='skills'>
            <div className={style.skillsContainer}>
                <BlockHeader title={'Skills'} description={'Some of my skills'}/>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'} description={'Description 1 loren ipsum dolar sit omet lll'}
                           imgUrl={image}/>
                    <Skill title={'JS/TS'} description={'Description 2'} imgUrl={''}/>
                    <Skill title={'React'} description={'Description 3'} imgUrl={''}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;