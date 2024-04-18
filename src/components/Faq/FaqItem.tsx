import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import {ReactComponent as FaqBut} from '../../assets/faq.svg';
import style from './FaqItem.module.scss';

type TProps = {
    className?: string,
    title: string,
    content: string,
    open: boolean,
    setOpen: () => void,
}

const FaqItem: FC<TProps> = (props) => {
    const { className, title, content, open, setOpen } = props;

    const mainClass = classNames(style.item, className);

    return (
        <div className={mainClass}>
            <div className={style.top} onClick={setOpen}>
                <h3 className={style.title}>{title}</h3>
                <div className={classNames(style.but, open ? style.active : '')}>
                    <FaqBut/>
                </div>
            </div>
            <CSSTransition 
                in={open}
                classNames={'faq'}
                timeout={300}
                unmountOnExit
            >
                <div className={style.content}>
                    <p className={style.text}>{content}</p>
                </div>
            </CSSTransition>

        </div>
    )
}

export default FaqItem;