import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import '../styles/MyPage.css';
import {apiGet} from "../app/api/GET";
import BannerModal from '../modal/BannerModal';
import {apiPost} from "../app/api/POST";

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
    const [showBannerModal, setShowBannerModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        apiGet("userInfo", "114027144862810472910")
            .then(data => {
                setUser(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch user info:", err);
                setError("사용자 정보를 불러오는데 실패했습니다.");
                setIsLoading(false);
            });
    }, []);

    const handleBannerUpdate = async (newBannerUrl) => {
        try {
            setIsLoading(true);

            await apiPost("updateUserBanner", {
                google_id: "114027144862810472910",
                banner: newBannerUrl
            });

            setUser(prevUser => ({
                ...prevUser,
                banner: newBannerUrl
            }));
            setShowBannerModal(false);
            alert("배너가 성공적으로 업데이트되었습니다.");
        } catch (error) {
            console.error("Failed to update banner:", error);
            alert("배너 업데이트에 실패했습니다. 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="my-page">
            <main className="main-content">
                <div className="banner-container">
                    <img src={user.banner} alt="Banner" className="banner-image" />
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
                    onClose={() => setShowBannerModal(false)}
                    onSelectBanner={handleBannerUpdate}
                />
            )}
        </div>
    );
};

export default MyPage;