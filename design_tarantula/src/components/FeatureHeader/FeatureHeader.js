import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './FeatureHeader.module.css';

const FeatureHeader = ({ scrollToTwoColumnLayout }) => {
    const [zoomed, setZoomed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setZoomed(true);
        }, 500); // Adjust the interval duration (in milliseconds) to change the auto zoom timing

        return () => clearTimeout(timer);
    }, [zoomed]);

    return (
        <div className={styles.featureHeader}>
            <div className={`${styles.backgroundImage} ${zoomed ? styles.zoomed : ''}`}>
                <div className={styles.overlay}></div>
            </div>
            <header className={styles.content}>
                <h1>Hi, I'm Mark</h1>
                <p>web developer and graphic designer</p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.chevronDown}
                    onClick={scrollToTwoColumnLayout}
                />
            </header>
        </div>
    );
};

export default FeatureHeader;
