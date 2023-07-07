import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';
import Image from '../Image/Image';

const MySlider = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {items.map((item) => (
                    <div className={styles.slide}>
                        <div className={styles.slideContent}>
                            <Image imageUrl={item.image} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MySlider;
