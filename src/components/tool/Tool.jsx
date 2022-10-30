import React from 'react';
import './tool.css';

const Tool = (item) => {
    return (
        <div className='tool-main__container'>
            <div className='tool-main__inner-container'>
                <img src={item.data.img} alt="Tool Icon" />
                <h2>{item.data.name}</h2>
                <p>{item.data.description}</p>
            </div>
        </div>
    )
}

export default Tool;