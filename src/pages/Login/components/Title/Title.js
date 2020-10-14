import React from 'react';
import './Title.css';

const Title = ({ text }) => {
    return(
        <div className='Title-container'>
            <h1 className='Title-text'>
                { text }
            </h1>
        </div>
    )
}

export default Title;