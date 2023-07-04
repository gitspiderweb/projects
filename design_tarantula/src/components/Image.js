import React from 'react';

const Image = ({ imageUrl }) => {
    return (
        <div className="responsive-container">
            <img src={imageUrl} alt="Responsive" className="responsive-image" />
        </div>
    );
};

export default Image;
