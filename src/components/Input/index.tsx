import classNames from "classnames";
import React, { FC, useState, ChangeEvent } from "react";
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Error } from '../../assets/error.svg';
import s from './Input.module.scss';

type TProps = {
    type: 'text' | 'tel',
    onChange?: (a: string) => void,
    value: string,
    readonly?: boolean,
    className?: string,
    placeholder?: string,
    lock?: (a: boolean) => void
}

const Input: FC<TProps> = (props) => {
    const { type, onChange, value, readonly, className, placeholder, lock } = props;
    const [check, setCheck] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errMes, setErrMes] = useState<string>('');
    const mainClass = classNames(className, s.input, error ? s.error : '');
    const telExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    const inputHandler = (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        if (value.length < 1) {
            setError(true);
            setErrMes('Текст слишком короткий');
            setCheck(false);
        } else {
            setErrMes('');
            setError(false);
            setCheck(true);
        }

        if (type === 'tel') {
            if (!telExp.test(value)) {
                setErrMes('Некорректный номер');
                setError(true);
                setCheck(false);
                if(lock){
                    lock(true)
                }
            } else {
                setErrMes('');
                setError(false);
                setCheck(true);
                if(lock){
                    lock(false);
                }
            }
        }
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <div className={mainClass}>
            <input className={s.rInput} type={type} value={value} readOnly={readonly} placeholder={placeholder} onChange={inputHandler} />
            <div className={s.status}>
                {error && <Error />}
                {check && <Check />}
            </div>
            {error && <div className={s.errMess}>{errMes}</div>}
        </div>
    )
}

export default Input