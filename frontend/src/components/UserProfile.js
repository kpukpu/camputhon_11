import React from 'react';
import Progress from './Progress';
import '../styles/UserProfile.css';
import profileImage from '../assets/profile.png';
import tierImage from '../assets/tempTierImage.png'

const UserProfile = ({ user }) => {
    const { nickname, title, topPercentage, currentTier, nextTier, currentPoints, levelUpPoints } = user;
    const progressPercentage = (currentPoints / levelUpPoints) * 100;

    return (
        <div className="user-profile">
            <div className="profile-header">
                <div className="profile-image">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className="profile-info">
                    <div className="name-title-container">
                        <span className="profile-title">{title}</span>
                        <h2 className="profile-name">{nickname}</h2>
                        <img src={tierImage} alt="Tier" className="profile-tier"/>
                    </div>
                    <p className="profile-percentage">상위 {topPercentage}%</p>
                </div>
            </div>
            <div className="profile-progress">
                <div className="edit-profile-container">
                    <button className="edit-profile-button">프로필 편집하기</button>
                </div>
                <div className="tier-info">
                    <span className="current-tier">현재 티어: {currentTier}</span>
                    <span className="next-tier">다음 티어: {nextTier}</span>
                </div>
                <div className="progress-bar-container">
                    <Progress value={progressPercentage} />
                    <span className="progress-text">{currentPoints} / {levelUpPoints}</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;