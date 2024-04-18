import React, { FC, useEffect, useState } from "react";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from "classnames";
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as RightArr } from '../../assets/rigthLink.svg';
import style from './Header.module.scss';

const Header: FC = () => {

    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const minWidth = 768;

    const resizeHandler = () => {
        const windowWidth = window.screen.width;

        if (windowWidth < minWidth) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        resizeHandler();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)

        return () => window.removeEventListener('resize', resizeHandler);
    })

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={classNames(style.logo, open ? style.logoBlack : '')}>
                    <Logo />
                </div>
                <nav className={style.nav}>
                    {isMobile &&
                        <>
                            <div className={classNames(style.burger, open ? style.open : '')} onClick={() => setOpen(!open)}>
                                <span className={style.line}></span>
                                <span className={style.line}></span>
                            </div>
                            <CSSTransition
                                in={open}
                                timeout={300}
                                unmountOnExit
                                classNames={'navMobile'}
                            >
                                <ul className={style.mobileLinks}>
                                    <li><a onClick={() => setOpen(false)} href="#how" className={style.link}>Как это работает</a><RightArr /></li>
                                    <li><a onClick={() => setOpen(false)} href="#3block" className={style.link}>3-й блок</a><RightArr /></li>
                                    <li><a onClick={() => setOpen(false)} href="#faq" className={style.link}>Вопросы и ответы</a><RightArr /></li>
                                    <li><a onClick={() => setOpen(false)} href="#feedback" className={style.link}>Форма</a><RightArr /></li>
                                </ul>
                            </CSSTransition>
                        </>
                    }
                    {!isMobile &&
                        <ul className={style.links}>
                            <li><a onClick={() => setOpen(false)} href="#how" className={style.link}>Как это работает</a></li>
                            <li><a onClick={() => setOpen(false)} href="#3block" className={style.link}>3-й блок</a></li>
                            <li><a onClick={() => setOpen(false)} href="#faq" className={style.link}>Вопросы и ответы</a></li>
                            <li><a onClick={() => setOpen(false)} href="#feedback" className={style.link}>Форма</a></li>
                        </ul>
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header;