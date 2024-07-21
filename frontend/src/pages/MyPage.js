import React, { useState, useEffect } from 'react';
/*import Header from './Header';
import Footer from './Footer';*/
import UserProfile from '../components/UserProfile';
import '../styles/MyPage.css';
import bannerImage from '../assets/profile.png';


const MyPage = () => {
    const [user, setUser] = useState({
        nickname: '사용자',
        title: '초보 개발자',
        topPercentage: 50,
        tier: 'Bronze',
        currentPoints: 10,
        levelUpPoints: 100,
        currentTier: 'Bronze I',
        nextTier: 'Bronze II'
    });

    useEffect(() => {
        // 여기서 실제 사용자 데이터를 불러오는 API 호출을 할 수 있습니다.
        // 예: fetchUserData().then(data => setUser(data));
    }, []);

    return (
        <div className="my-page">

            <main className="main-content">
                <div className="banner-container">
                    <img src={bannerImage} alt="Banner" className="banner-image" />
                    <UserProfile user={user} />
                </div>
                {/* 여기에 추가적인 마이페이지 컨텐츠를 넣을 수 있습니다 */}
            </main>

        </div>
    );
};

export default MyPage;