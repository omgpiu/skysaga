import React from 'react';
import {Carousel} from 'antd';
import {useSelector} from 'react-redux';

import st from './PlacesCarousel.module.css';
import {getSlides} from '../f2-SkyScanner/s2-bll/skyScanner-selectors';


export const PlacesCarousel = () => {

    const slides = useSelector(getSlides);


    return <div style={{width: '600px'}}>
        <Carousel autoplay slidesToShow={4}
                  dots={false}>


            {slides.map(slide => {
                return <img src={slide.img} alt={slide.title} className={st.slide}/>;
            })}

        </Carousel>


    </div>;
};
