import React, { FC, useEffect, useState } from "react";
import { useAction, useAppSelector } from "../../hooks/redux";
import FaqItem from "./FaqItem";
import s from './Faq.module.scss';

const Faq: FC = () => {
    const {loading, error, faqData} = useAppSelector(state => state.faq);
    const {getFaq} = useAction();
    const [cur, setCur] = useState<string>('')
    
    useEffect(() => {
        getFaq();
    }, []);

    return (
        <section className={s.faq} id="faq">
            <div className={s.container}>
                <h2 className={s.title}>Вопросы и ответы</h2>
                <div className={s.faqContainer}>
                    {faqData?.map(item => <FaqItem className={s.item} title={item.title} content={item.content} open={cur === item.id} setOpen={() => setCur(item.id)}/>)}
                </div>
            </div>
        </section>
    )
}

export default Faq;