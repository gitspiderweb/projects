import React from 'react';
import Image from '../Image';

const Grid = ({ items, limit }) => {
    const displayedItems = limit ? items.slice(0, limit) : items;

    return (
        <div className="grid">
            {displayedItems.map((item) => (
                <div key={item.id} className="grid-item">
                    <Image imageUrl={item.image} />
                </div>
            ))}
        </div>
    );
};

export default Grid;
