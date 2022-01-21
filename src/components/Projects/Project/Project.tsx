import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    projectTitle: string
    projectDescription: string
}

const Project = ({projectTitle, projectDescription, ...props}: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imageBlock}>
                <button className={style.viewButton}>View Project</button>
                {/*    вынести в отдельную компоненту*/}
            </div>
            <h3>{projectTitle}</h3>
            <span className={style.description}>{projectDescription}</span>
        </div>
    );
};

export default Project;