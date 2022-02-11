import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    imgUrl:string
}

const Skill = ({title, description, imgUrl, ...props}: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};

export default Skill;