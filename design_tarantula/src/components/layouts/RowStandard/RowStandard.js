import React from 'react';
import styles from './RowStandard.module.css';

const RowStandard = ({ section, children, marginTop60 }) => {

    const rowClasses = `${styles['row-standard']} ${marginTop60 ? styles['margin-top-60'] : ''}`;

    return (
        <div className={section}>
            <div className={rowClasses}>
                {children}
            </div>
        </div>
    );
};

export default RowStandard;
