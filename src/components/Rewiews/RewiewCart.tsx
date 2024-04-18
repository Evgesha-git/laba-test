import React, { FC } from "react";
import style from './RewiewCart.module.scss';
import nonAva from '../../assets/nonAva.png';
import classNames from "classnames";

type TProps = {
    name: string,
    img: string,
    country: string,
    content: string,
    className?: string,
}

const RewiewCart: FC<TProps> = (props) => {
    const { name, img, country, content, className } = props;
    const mainClass = classNames(className, style.item)
    return (
        <div className={mainClass}>
            <div className={style.title}>
                <div className={style.img}>
                    <img src={img ? img : nonAva} alt="avatar" />
                </div>
                <div className={style.titletext}>
                    <h3 className={style.name}>{name}</h3>
                    <p className={style.country}>{country}</p>
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>{content}</p>
            </div>
        </div>
    )
}

export default RewiewCart;