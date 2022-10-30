import React from 'react';
import './home.css';
import { Tool } from '../index';
import { ToolsData } from '../../database/tool/data';

const Home = () => {
    const randomTool = getRandomItem(ToolsData);
    return (
        <div className="home-main__container">
            <h1 className="gradient__text">Toolhub Records Manager</h1>
            <p className='home-main_description'>
                The Toolhub item is <b>missing</b> a piece of information. Can you find one?
                Click <b>I got this!</b> to go to Toolhub and edit the tool, or <b>Next!</b> to see another one. Good luck!
                Search for specific tool below.
            </p>
            <Tool data={randomTool}/>
            <div className="home-main__buttons-container">
                <button type="button" className='button_got-this'>I got this!</button>
                <button type="button" className='button_next'>Next</button>
            </div>
        </div>
    );
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

export default Home;