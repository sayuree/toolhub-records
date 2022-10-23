import React from 'react';
import './navbar.css';
import  { Link } from 'react-router-dom';

const Navbar  = () => {
    return(
        <nav className="navbar">
            <ul>
                <Link to='/' className='home'>
                    <li>Home</li>
                </Link>
                <Link to='/leaderboard' className='leaderboard'>
                    <li>Leaderboard</li>
                </Link>
                <Link to='/dashboard' className='dashboard'>
                    <li>Dashboard</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;