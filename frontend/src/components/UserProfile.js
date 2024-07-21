import React, { useState } from 'react';
import Progress from './Progress';
import '../styles/UserProfile.css';
import profileImage from '../assets/profile.png';
import bronzeTierImage from '../assets/tier/bronze.png';
import silverTierImage from '../assets/tier/silver.png';
import goldTierImage from '../assets/tier/gold.png';
import emeraldTierImage from '../assets/tier/emerald.png';
import diamondTierImage from '../assets/tier/diamond.png';
import rubyTierImage from '../assets/tier/ruby.png';
import ProfilePictureModal from '../modal/ProfilePictureModal';
import TitleModal from '../modal/TitleModal';
import MyPoint from '../components/MyPoint';

const UserProfile = ({ user, isEditing, setIsEditing }) => {
    const { nickname, week_score, currentTier, nextTier, currentPoints, levelUpPoints, google_id, avatar, title } = user;
    const progressPercentage = (currentPoints / levelUpPoints) * 100;

    const [showProfilePictureModal, setShowProfilePictureModal] = useState(false);
    const [showTitleModal, setShowTitleModal] = useState(false);
    const [tempProfileImage, setTempProfileImage] = useState(null);
    const [currentTitle, setCurrentTitle] = useState(title);
    const { silverPoint, goldPoint } = user;

    // 임시 칭호 리스트
    const titleList = ['초보 개발자', '중급 개발자', '고급 개발자', '마스터 개발자'];

    const getTierImage = (tier) => {
        switch (tier) {
            case 'bronze':
                return bronzeTierImage;
            case 'silver':
                return silverTierImage;
            case 'gold':
                return goldTierImage;
            case 'emerald':
                return emeraldTierImage;
            case 'diamond':
                return diamondTierImage;
            case 'ruby':
                return rubyTierImage;
            default:
                return bronzeTierImage;
        }
    };

    const tierImage = getTierImage(nextTier);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            console.log('프로필 변경사항 저장');
        }
    };

    const handleTitleClick = () => {
        if (isEditing) {
            setShowTitleModal(true);
        }
    };

    const handleTitleSelect = (newTitle) => {
        setCurrentTitle(newTitle);
        setShowTitleModal(false);
    };

    const handleProfilePictureUpload = (file) => {
        setTempProfileImage(URL.createObjectURL(file));
    };

    return (
        <div className="user-profile">
            <div className="profile-header">
                <div className="profile-image">
                    <img src={avatar || profileImage} alt="Profile"/>
                    {isEditing && (
                        <button className="edit-profile-picture-button"
                                onClick={() => setShowProfilePictureModal(true)}>
                            수정하기
                        </button>
                    )}
                </div>
                <div className="profile-info">
                    <div className="name-title-container">
                        <div className="title-wrapper">
                            <span className="profile-title">
                                {currentTitle}
                            </span>
                            {isEditing && (
                                <button
                                    className="edit-title-button"
                                    onClick={handleTitleClick}
                                >
                                    수정
                                </button>
                            )}
                        </div>
                        <h2 className="profile-name">{nickname}</h2>
                        <img src={tierImage} alt="Tier" className="profile-tier"/>
                    </div>
                    <p className="profile-percentage">주간 점수 {week_score}</p>
                </div>
            </div>
            <div className="profile-progress">
                <div className="edit-profile-container">
                    <button className="edit-profile-button" onClick={toggleEditing}>
                        {isEditing ? '저장하기' : '프로필 편집하기'}
                    </button>
                </div>
                <div className="tier-info">
                    <span className="current-tier">현재 티어: {nextTier}</span>
                    <span className="next-tier">다음 티어: {nextTier}</span>
                </div>
                <div className="progress-bar-container">
                    <Progress value={progressPercentage}/>
                    <span className="progress-text">{currentPoints} / {levelUpPoints}</span>
                </div>
            </div>
            <p className="point">
                <MyPoint silverPoint={silverPoint} goldPoint={goldPoint}/>
            </p>
            {showProfilePictureModal && (
                <ProfilePictureModal onClose={() => setShowProfilePictureModal(false)}
                                     onUpload={handleProfilePictureUpload}/>
            )}
            {showTitleModal && (
                <TitleModal
                    titles={titleList}
                    onClose={() => setShowTitleModal(false)}
                    onSelect={handleTitleSelect}
                />
            )}
        </div>
    );
};

export default UserProfile;