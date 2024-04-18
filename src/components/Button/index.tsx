import classNames from "classnames";
import React, { FC } from "react";
import style from './Button.module.scss';

type TProps = {
    className?: string;
    text: string,
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button',
    disabled?: boolean
}

const Button: FC<TProps> = (props) => {
    const {className, text, onClick, type, disabled} = props;
    const mainClass = classNames(className, style.button)

    return <button type={type} className={mainClass} onClick={onClick} disabled={disabled}>{text}</button>
}

export default Button;