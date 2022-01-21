import React from 'react';
import style from './Main.module.css'


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi there</span>
                    <h1>I am
                        <span> Bohdan Peliutkevich</span>
                    </h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;