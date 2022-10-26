import React, { useState } from 'react';
import { Profile } from '../index';
import { LeaderboardData } from '../../database/leaderboard/data';
import './leaderboard.css';

const Leaderboard = () => {
    const [period, setPeriod] = useState(0);

    const handleClick = (e) => {
        setPeriod(e.target.dataset.id);
    }

    return (
        <div className="leaderboard-board_container">
            <div className="leaderboard-board_header">
                <h1 className="gradient__text">Toolhub Contribution Leaderboard</h1>
            </div>
            <div className="leaderboard-duration_section">
                <button type='button' onClick={handleClick} data_id='7'>Last Week</button>
                <button type='button' onClick={handleClick} data_id='30'>Last Month</button>
                <button type='button' onClick={handleClick} data_id='0'>All Time</button>
            </div>
            <Profile data={sortByDate(LeaderboardData, period)}/>
        </div>
    );
}

function sortByDate(data, period){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (period + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (period === 0) return val;
        return previous <= userDate && today >= userDate;
    })

    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}

export default Leaderboard;