import React from 'react';
import styles from './Grid.module.css';
import Image from '../../Image/Image';

const Grid = ({ items, limit }) => {
    const displayedItems = limit ? items.slice(0, limit) : items;

    return (
        <div className={styles.grid}>
            {displayedItems.map((item) => (
                <div key={item.id} className={styles['grid-item']}>
                    <Image imageUrl={item.image} />
                </div>
            ))}
        </div>
    );
};

export default Grid;
