import React from 'react';
import { Navbar, Home, Leaderboard, Dashboard } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <div className='gradient__bg'>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/leaderboard" element={<Leaderboard/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;