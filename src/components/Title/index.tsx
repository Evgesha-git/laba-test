import React, { FC } from "react";
import Button from "../Button";
import style from './Title.module.scss';

const Title: FC = () => {

    return (
        <section className={style.titleSection}>
            <div className={style.container}>
                <h1 className={style.title}>
                    Говорят, никогда не поздно сменить профессию
                </h1>
                <p className={style.suptitle}>Сделай круто тестовое задание и у тебя получится</p>
                <Button text="Проще простого!" className={style.button} />
            </div>
        </section>
    )
}

export default Title;