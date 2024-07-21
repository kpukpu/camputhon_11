import React, { useState } from 'react';
import Progress from './Progress';
import '../styles/UserProfile.css';
import profileImage from '../assets/profile.png';
import tierImage from '../assets/tier/bronze.png';
import BannerModal from '../modal/BannerModal';
import ProfilePictureModal from '../modal/ProfilePictureModal';
import TitleModal from '../modal/TitleModal';
import MyPoint from '../components/MyPoint';


const UserProfile = ({ user }) => {
    const { nickname, topPercentage, currentTier, nextTier, currentPoints, levelUpPoints } = user;
    const progressPercentage = (currentPoints / levelUpPoints) * 100;

    const [isEditing, setIsEditing] = useState(false);
    const [showBannerModal, setShowBannerModal] = useState(false);
    const [showProfilePictureModal, setShowProfilePictureModal] = useState(false);
    const [showTitleModal, setShowTitleModal] = useState(false);
    const [tempProfileImage, setTempProfileImage] = useState(null);
    const [currentTitle, setCurrentTitle] = useState(user.title);
    const { silverPoint, goldPoint } = user;

    // 임시 칭호 리스트
    const titleList = ['초보 개발자', '중급 개발자', '고급 개발자', '마스터 개발자'];

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            // 여기에 저장 로직을 추가합니다
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
            <div className="banner-container">
                {isEditing && (
                    <button className="edit-banner-button" onClick={() => setShowBannerModal(true)}>
                        수정하기
                    </button>
                )}
            </div>
            <div className="profile-header">
                <div className="profile-image">
                    <img src={tempProfileImage || profileImage} alt="Profile"/>
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
                    <p className="profile-percentage">상위 {topPercentage}%</p>
                </div>
            </div>
            <div className="profile-progress">
                <div className="edit-profile-container">
                    <button className="edit-profile-button" onClick={toggleEditing}>
                        {isEditing ? '저장하기' : '프로필 편집하기'}
                    </button>
                </div>
                <div className="tier-info">
                    <span className="current-tier">현재 티어: {currentTier}</span>
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
            {showBannerModal && (
                <BannerModal onClose={() => setShowBannerModal(false)}/>
            )}
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