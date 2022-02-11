import React from 'react';
import style from './BlockHeader.module.css'

type BlockHeaderPropsType = {
    title: string,
    description: string
}
const BlockHeader = ({title, description}: BlockHeaderPropsType) => {
    return (
        <div className={style.headerBlock}>
            <div className={style.headerTitle}>
                <span>{title}</span>
            </div>
            <div className={style.headerDescription}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlockHeader;