import React from 'react';
import './navbar.css';
import logo from '../../assets/toolhub_community_logo.svg';

const Navbar  = () => {
    return(
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="Toolhub Community Logo"/>
                </div>
                <div className='navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#leaderboard">Leaderboard</a></p>
                    <p><a href="#dashboard">Dashboard</a></p>
                </div>
                <div className='navbar-sign'>
                    <p>Log in</p>
                    <button type='button'>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;