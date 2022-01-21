import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main Page</a>
            <a href="">My skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    );
};

export default Nav;