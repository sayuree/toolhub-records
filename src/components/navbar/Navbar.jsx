import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/toolhub_community_logo.svg';

const Navbar  = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="Toolhub Community Logo"/>
                </div>
                <div className='navbar-links_container'>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/leaderboard">Leaderboard</Link></p>
                    <p><Link to="/dashboard">Dashboard</Link></p>
                </div>
                <div className='navbar-sign'>
                    <p>Log in</p>
                    <button type='button'>Sign up</button>
                </div>
                <div className='navbar-menu'>
                    {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>}
                    {toggleMenu && (
                        <div className='navbar-menu_container scale-up center'>
                            <div className='navbar-menu_container-links'>
                                <p><a href="#home">Home</a></p>
                                <p><a href="#leaderboard">Leaderboard</a></p>
                                <p><a href="#dashboard">Dashboard</a></p>
                            </div>
                            <div className="navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;