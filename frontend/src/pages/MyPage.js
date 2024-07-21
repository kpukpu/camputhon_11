import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import '../styles/MyPage.css';
import {apiGet} from "../app/api/GET";
import BannerModal from '../modal/BannerModal';
import {apiPut} from "../app/api/PUT";  // 추가

const MyPage = () => {
    const [user, setUser] = useState({
        nickname: '사용자',
        title: '초보 개발자',
        topPercentage: 50,
        tier: 'Bronze',
        currentPoints: 10,
        levelUpPoints: 100,
        nextTier: 'Bronze',
        silverPoint: 500,
        goldPoint: 100,
        banner: "",
        google_id: ""

    });
    const [showBannerModal, setShowBannerModal] = useState(false);  // 추가
    const [isEditing, setIsEditing] = useState(false);  // 추가

    useEffect(() => {
        apiGet("userInfo", "이지동").then(data => setUser(data))
    }, []);

    const handleBannerUpdate = async (newBannerUrl) => {
        try {
            // 백엔드로 PUT 요청 보내기
            await apiPut("updateUserBanner", {
                google_id: user.google_id, // 사용자 ID를 적절히 지정해주세요
                banner: newBannerUrl
            });

            // 로컬 상태 업데이트
            setUser(prevUser => ({
                ...prevUser,
                banner: newBannerUrl
            }));

            // 모달 닫기
            setShowBannerModal(false);
        } catch (error) {
            console.error("Failed to update banner:", error);
            // 에러 처리 (예: 사용자에게 알림 표시)
        }
    };

    return (
        <div className="my-page">
            <main className="main-content">
                <div className="banner-container">
                    <img src={user.banner} alt="Banner" className="banner-image" />
                    {isEditing && (  // 추가
                        <button className="edit-banner-button" onClick={() => setShowBannerModal(true)}>
                            수정하기
                        </button>
                    )}
                    <UserProfile user={user} isEditing={isEditing} setIsEditing={setIsEditing} />
                </div>
            </main>
            {showBannerModal && (  // 추가
                <BannerModal
                    onClose={() => setShowBannerModal(false)}
                    onSelectBanner={handleBannerUpdate}
                />

            )}
        </div>
    );
};

export default MyPage;