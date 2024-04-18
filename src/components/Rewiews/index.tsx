import React, { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { useAction, useAppSelector } from "../../hooks/redux";
import classNames from "classnames";
import RewiewCart from "./RewiewCart";
import style from './Rewiews.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Rewiews: FC = () => {
    const { loading, error, data } = useAppSelector(state => state.rewiews);
    const { getData } = useAction();

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className={style.rewiews}>
            <div className={style.container}>
                <h2 className={style.title}>Отзывы</h2>
                <div className={style.slider}>
                    <div className='prevBtn'>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        effect="fabe"
                        speed={600}
                        spaceBetween={32}
                        navigation={{
                            nextEl: `.nextBtn`,
                            prevEl: `.prevBtn`,
                        }}
                        className="swiperSlider"
                        breakpoints={{
                            1122:{
                                slidesPerView: 3,

                            },
                            769:{
                                slidesPerView: 2.1,
                                spaceBetween: 24
                            },
                            600:{
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            320:{
                                slidesPerView: 1
                            }
                        }}
                    >
                        {data?.map(item =>
                            <SwiperSlide>
                                {({ isActive }) => <RewiewCart className={isActive ? '' : style.nonActive} name={item.name} country={item.country} img={item.image} content={item.content} />}
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className='nextBtn'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rewiews;