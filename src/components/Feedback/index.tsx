import React, { FC, useState, FormEvent } from "react";
import Input from "../Input";
import s from './Feedback.module.scss';
import Button from "../Button";

const Feedback: FC = () => {
    const [name, setName] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [lock, setLock] = useState<boolean>(false)

    const formHandler = async (e: FormEvent) => {
        e.preventDefault();
        if (tel.length > 0 && name.length > 0) {
            try {
                setLock(true)
                const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        phone: tel
                    })
                });
                const data = await resp.json();
                console.log(data);
                setLock(false);
            }catch(e: any){
                console.log(e.message);
            }
        }
    }

    return (
        <section className={s.feedback} id="feedback">
            <div className={s.container}>
                <h2 className={s.title}>Отправь форму</h2>
                <form className={s.form} onSubmit={formHandler}>
                    <div className={s.inputs}>
                        <Input className={s.input} type={'text'} placeholder="Имя" value={name} onChange={(a) => setName(a)} />
                        <Input className={s.input} type={'tel'} placeholder="Телефон" value={tel} onChange={(a) => setTel(a)} lock={(a) => setLock(a)} />
                    </div>
                    <div className={s.confirm}>
                        <div className={s.checkbox}>
                            <input className={s.check} type="checkbox" id="check" onChange={(e) => setChecked(e.target.checked)} checked={checked} />
                            <label htmlFor="check" className={s.forCheck}>{checked ? 'Отказываюсь' : 'Согласен'}</label>
                        </div>
                        <Button type="submit" text="Отправить" className={s.button} disabled={lock} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Feedback;