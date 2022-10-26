import React from 'react';
import { Navbar, Leaderboard } from './components'
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Leaderboard/>
            </div>
        </div>
    )
}

export default App;