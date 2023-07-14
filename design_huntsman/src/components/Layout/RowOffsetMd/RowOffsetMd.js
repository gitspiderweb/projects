import React from 'react';
import styles from './RowOffsetMd.module.css';

const RowOffsetMd = ({ section, children, marginTop60, marginBottom0, colored }) => {

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

export default RowOffsetMd;
