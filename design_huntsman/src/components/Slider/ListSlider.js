import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';


const ListSlider = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            to={`/projects/${item.id}`}
                            className={styles.slide}
                        >
                            <div className={styles.slideContent}>
                                <Image imageUrl={item.image} />
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ListSlider;
