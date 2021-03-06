import React from 'react';
import {Carousel} from 'antd';
import {useSelector} from 'react-redux';
import st from './PlacesCarousel.module.scss';
import {getSlides} from '../f2-SkyScanner/s2-bll/skyScanner-selectors';


export const PlacesCarousel = () => {
    const slides = useSelector(getSlides);

    return <div className={st.wrapper}>
        <Carousel autoplay slidesToShow={3}
                  dots={false}>


            {slides.map(slide => {
                return <img src={slide.img} alt={slide.title} className={st.slide} key={slide.id}/>;
            })}

        </Carousel>


    </div>;
};
