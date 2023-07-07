import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

const Image = ({ imageUrl, maxHeight, maxWidth }) => {
    const containerStyle = {
        maxHeight: maxHeight || '100%',
        maxWidth: maxWidth || '100%'
    };

    return (
        <div className={styles['responsive-container']} style={containerStyle}>
            <img src={imageUrl} alt="Responsive" className={styles['responsive-image']} />
        </div>
    );
};

Image.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string
};

export default Image;
