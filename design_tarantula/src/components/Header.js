import React from 'react';
import Nav from './Nav';
import FeatureHeader from './FeatureHeader';

const Header = ({ scrollToTwoColumnLayout }) => {
    return (
        <header className='header'>
            <Nav />
            <FeatureHeader scrollToTwoColumnLayout={scrollToTwoColumnLayout} />
        </header>
    );
}


export default Header;