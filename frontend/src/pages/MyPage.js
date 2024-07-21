import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import '../styles/MyPage.css';
import { apiGet } from "../app/api/GET";
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
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch user info:", err);
                setError("사용자 정보를 불러오는데 실패했습니다.");
                setIsLoading(false);
            });

        // Fetch banner list

    }, []);

    const handleBannerSelect = (bannerUrl) => {
        setSelectedBanner(bannerUrl);
    };

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="my-page">
            <main className="main-content">
                <div className="banner-container">
                    <img src={selectedBanner || user.banner} alt="Banner" className="banner-image" />
                    {isEditing && (
                        <button className="edit-banner-button" onClick={() => setShowBannerModal(true)}>
                            수정하기
                        </button>
                    )}
                    <UserProfile user={user} isEditing={isEditing} setIsEditing={setIsEditing} />
                </div>
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
