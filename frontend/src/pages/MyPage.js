import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import '../styles/MyPage.css';
import { apiGet } from "../app/api/GET";
import { apiPut } from '../app/api/PUT';
import BannerModal from '../modal/BannerModal';

const MyPage = () => {
    const [user, setUser] = useState({
        google_id: "",
        avatar: "",
        nickname: "",
        title: "",
        currentPoints: "",
        levelUpPoints: "",
        week_score: "",
        banner: "",
        nextTier: ""
    });
    const [banners, setBanners] = useState([]);
    const [showBannerModal, setShowBannerModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const userGoogleId = JSON.parse(localStorage.getItem('user'))?.user_id;

    useEffect(() => {
        setIsLoading(true);
        apiGet("bannerList")
            .then(data => {
                setBanners(data);
            })
            .catch(err => {
                console.error("Failed to fetch banners:", err);
                setError("배너 목록을 불러오는데 실패했습니다.");
            });

        apiGet("userInfo", userGoogleId)
            .then(data => {
                setUser(data);
                setSelectedBanner(data.banner);  // 유저 배너를 선택된 배너로 설정
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch user info:", err);
                setError("사용자 정보를 불러오는데 실패했습니다.");
                setIsLoading(false);
            });
    }, [userGoogleId]);

    const handleBannerSelect = async (bannerUrl) => {
        setSelectedBanner(bannerUrl);
        setShowBannerModal(false);

        try {
            await apiPut("updateUserBanner", { google_id: user.google_id, banner: bannerUrl });
            setUser(prevUser => ({ ...prevUser, banner: bannerUrl }));
        } catch (error) {
            console.error('Failed to update user banner:', error);
            setError("배너를 업데이트하는데 실패했습니다.");
        }
    };

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="my-page">
            <main className="main-content">
                <div className="banner-container" style={{ backgroundImage: `url(${selectedBanner || user.banner})` }}>
                    {isEditing && (
                        <button className="edit-banner-button" onClick={() => setShowBannerModal(true)}>
                            수정하기
                        </button>
                    )}
                </div>
                <UserProfile user={user} isEditing={isEditing} setIsEditing={setIsEditing} className="user-profile"/>
            </main>
            {showBannerModal && (
                <BannerModal
                    banners={banners}
                    onClose={() => setShowBannerModal(false)}
                    onSelectBanner={handleBannerSelect}
                />
            )}
        </div>
    );
};

export default MyPage;
