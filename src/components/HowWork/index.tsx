import React, { FC } from "react";

import style from './HowWork.module.scss';
import waiting from '../../assets/waiting.png';
import secure from '../../assets/secure.png';
import mony from '../../assets/money-bags.png';
import car from '../../assets/delivery-truck.png';
import Cart from "./Cart";
import Bg from '../../assets/3img.png';

const data = [
    {
        img: waiting,
        title: 'Прочитай задание внимательно',
        text: 'Думаю у тебя не займет это больше двух-трех минут'
    },
    {
        img: car,
        title: 'Изучи весь макет заранее',
        text: 'Подумай как это будет работать на разных разрешениях и при скролле'
    },
    {
        img: secure,
        title: 'Сделай хорошо',
        text: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
    },
    {
        img: mony,
        title: 'Получи предложение',
        text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    },
]

const HowWork: FC = () => {



    return (
        <section className={style.work} id="how">
            <div className={style.container}>
                <h2 className={style.title}>Как это работает</h2>
                <div className={style.icons}>
                    {data.map((item, i) => <Cart key={i.toString()} img={item.img} title={item.title} text={item.text}/>)}
                </div>
                <div className={style.route} id="3block">
                    <div className={style.left}>
                        <h2 className={style.leftTite}>Круто, ты дошел до третьего блока</h2>
                        <p className={style.leftText}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
                        <p className={style.leftText}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
                    </div>
                    <div className={style.right}>
                        <div className={style.img}>
                            <img src={Bg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWork;