import React from 'react';

const BannerModal = ({ onClose }) => {
    // 임시 배너 이미지 리스트
    const bannerImages = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];

    return (
        <div className="modal">
            <h2>배너 선택</h2>
            <div className="banner-list">
                {bannerImages.map((banner, index) => (
                    <img key={index} src={banner} alt={`Banner ${index + 1}`} onClick={() => {
                        console.log(`배너 ${index + 1} 선택됨`);
                        onClose();
                    }} />
                ))}
            </div>
            <button onClick={onClose}>닫기</button>
        </div>
    );
};

export default BannerModal;