import React from 'react';
import './profile.css';

const Profile = (userData) => {

    return (
        <div className="profile-data__container">
            {Item(userData.data)}
        </div>
    )
}

const Item = (userData) => {
    return (
        <div className="profile-data">
            {
                userData.map((value, index) => (
                    <div className="profile-data_items" key={index}>
                        <div className="profile-data_avatar">
                            <img src={value.img} alt="User Avatar" />
                        </div>
                        <div className="profile-data_username">
                                <p className='profile-data_name'>{value.name}</p>
                        </div>
                        <div className="profile-data_location">
                            <span>{value.location}</span>
                        </div>
                        <div className='profile-data_score'>
                            <span>{value.score}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Profile;