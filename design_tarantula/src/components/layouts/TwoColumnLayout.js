import React from 'react';

const TwoColumnLayout = ({ leftColumn, rightColumn }) => {
    return (
        <div className="two-column-layout">
            <div className="column column-left">{leftColumn}</div>
            <div className="column column-right">{rightColumn}</div>
        </div>
    );
};

export default TwoColumnLayout;
