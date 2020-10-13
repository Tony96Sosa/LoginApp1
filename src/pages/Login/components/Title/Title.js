import React from 'react';
import './Title.css';

const Title = ({ text }) => {
    return(
        <div className='Title-container'>
            { text }
        </div>
    )
}

export default Title;