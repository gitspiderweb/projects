import React from 'react';
import styles from './RowStandard.module.css';

const RowStandard = ({ section, children, marginTop60, marginBottom0, colored }) => {

    const container = `${colored ? styles.colored : styles.white}`;
    const containerInner = `${styles['container-inner']} ${marginTop60 ? styles['margin-top-60'] : ''} ${marginBottom0 ? styles['margin-bottom-0'] : ''}`;

    return (
        <div className={container}>
            <div className={containerInner}>
                {children}
            </div>
        </div>
    );
};

export default RowStandard;
