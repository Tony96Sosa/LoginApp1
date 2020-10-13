import React from 'react';
import './Input.css';

const Input = ({ atribbute ,handleChange, param }) => {
    const { id, type, name, placeholder } = atribbute;
    return(
        <div className='Input-container'>
            <input 
                id= {id}
                type= {type}
                name= {name}
                placeholder= {placeholder}
                onChange= { (e) => handleChange(e.target.name, e.target.value)}
                className={ param ? 'input-error' : 'regular-style'} />
        </div>
    )
}

export default Input;