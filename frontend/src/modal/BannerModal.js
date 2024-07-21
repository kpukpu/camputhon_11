import React from 'react';
import PropTypes from 'prop-types';

const BannerModal = ({ banners, onClose, onSelectBanner }) => {
    return (
        <div className="modal">
            <h2>배너 선택</h2>
            <div className="banner-list">
                {banners.map((banner, index) => (
                    <div key={index} className="banner-item" onClick={() => {
                        onSelectBanner(banner.image_url); // 배너 URL을 전달
                        onClose();
                    }}>
                        <img src={banner.image_url} alt={banner.name} />
                        <div className="banner-info">
                            <p>{banner.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={onClose}>닫기</button>
        </div>
    );
};

BannerModal.propTypes = {
    banners: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onSelectBanner: PropTypes.func.isRequired,
};

export default BannerModal;
