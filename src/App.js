import React from 'react';
import { Navbar, Home, Leaderboard } from './components'
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Home/>
            </div>
        </div>
    )
}

export default App;