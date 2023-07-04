import React from 'react';

const ButtonView = ({ text, file }) => {
    const openPdf = () => {
        // Add your code here
        window.open(file, '_blank');
    };

    return (
        <button onClick={openPdf} className='btn'>
            {text}
        </button>
    );
};

export default ButtonView;
