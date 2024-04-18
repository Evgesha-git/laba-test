import React, { FC } from "react";
import s from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <h2 className={s.title}>© 2021 Лаборатория интернет</h2>
            </div>
        </footer>
    )
}

export default Footer;