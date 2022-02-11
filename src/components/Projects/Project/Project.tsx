import React, {useState} from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    projectTitle: string
    projectDescription: string
    imageUrl: string
}

const Project = ({projectTitle, projectDescription, imageUrl, ...props}: ProjectPropsType) => {

    const [view, setView] = useState<boolean>(false)

    const onFocus = () => {
        setView(true)
    }

    const onLooseFocus = () => {
        setView(false)
    }

    return (
        <div className={style.project}>
            <div className={style.imageBlock}>
                <img src={imageUrl} onMouseEnter={onFocus} onMouseLeave={onLooseFocus}/>
                {view ? <div className={style.viewButton} onMouseEnter={onFocus}>
                    <a href='https://github.com/BohdanDS/To-do-list' target="_blank">View Project</a>
                </div> : ''}
            </div>
            <h3>{projectTitle}</h3>
            <span className={style.description}>{projectDescription}</span>
        </div>
    );
};

export default Project;