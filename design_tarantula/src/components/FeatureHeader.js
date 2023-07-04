import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FeatureHeader = ({ scrollToTwoColumnLayout }) => {
    const [zoomed, setZoomed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setZoomed(true);
        }, 500); // Adjust the interval duration (in milliseconds) to change the auto zoom timing

        return () => clearTimeout(timer);
    }, [zoomed]);

    return (
        <div className='feature-header'>
            <div className={`background-image ${zoomed ? 'zoomed' : ''}`}>
                <div className="overlay"></div>
            </div>
            <header className='content' >
                <h1>Hi, I'm Mark</h1>
                <p>web developer and graphic designer</p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className='chevron-down'
                    onClick={scrollToTwoColumnLayout}
                />
            </header>
        </div>
    );
};

export default FeatureHeader;

