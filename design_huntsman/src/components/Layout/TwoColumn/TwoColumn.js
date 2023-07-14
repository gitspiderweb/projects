import React from 'react';
import styles from './TwoColumn.module.css';

const TwoColumn = ({ leftColumn, rightColumn }) => {
    return (
        <div className={styles['two-column']}>
            <div className={`${styles.column} ${styles['column-left']}`}>{leftColumn}</div>
            <div className={`${styles.column} ${styles['column-right']}`}>{rightColumn}</div>
        </div>
    );
};

export default TwoColumn;
