import React from 'react';
import './Label.css';

const Label = ({ text, estilo }) => {
    return(
        <div className='Label-container'>
            <h2 className={estilo}>
                { text }
            </h2>
        </div>
    )
}

export default Label;