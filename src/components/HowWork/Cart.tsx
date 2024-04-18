import React, { FC } from "react";
import style from './Cart.module.scss';

type TProps = {
    className?: string;
    img: string,
    title: string,
    text: string,
}

const Cart: FC<TProps> = (props) => {
    const { className, img, title, text } = props;

    return (
        <div className={style.item}>
            <div className={style.img}>
                <img src={img} alt="img" />
            </div>
            <div>
                <h3 className={style.title}>{title}</h3>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    )
}

export default Cart;