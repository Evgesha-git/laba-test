import React, { FC } from "react";
import s from './MutItem.module.scss';

type TProps = {
    title: string,
    content: string,
}

const MutItem: FC<TProps> = (props) => {
    const {title, content} = props
    return (
        <div className={s.item}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.content}>{content}</p>
        </div>
    )
}

export default MutItem;