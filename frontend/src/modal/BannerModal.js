import React from 'react';

const BannerModal = ({ onClose, onSelectBanner }) => {
    // 임시 배너 이미지 리스트
    const bannerImages = [
        'https://i.namu.wiki/i/sUI5k-k3mFDLrUo-NFp17dAd1ZN3JWffa9tMU-E8Amv5S40XAzxl2TWsKY8EzT1sbXFrrNrPysbqORAo3YBz_mT6Rq8H6pbi2vOeg1LcVmAQKYsqYnBEqbK0DGswbbcyf7GqZzhr8cdIJpxE-8-V45tPRndRNTg7KKXM7okNQC4.webp',
        'https://i.namu.wiki/i/sUI5k-k3mFDLrUo-NFp17Rg_0r1G6mBtQsLIutIX1zEsExRBGMdb3S1uN9VwuaWGX7GpLyEG6QoAq6-Qfy85HRBEk582AHLi_1IjnahBAImwt40Dy5LsZ9kcj9Dl6fM1l4I5Y5ZIKE9CL7QC0S4tNjQrl7SJKR80MqfhDq6JNPE.webp',
        'https://i.namu.wiki/i/sUI5k-k3mFDLrUo-NFp17Q2lePpiQqbKjw6Lfeh4S8Pzyakz02MSzraTJmEJZV5Cxky-SdA4newEavhOPPb3e8RbpBqVUQg_MabgP8o3FYhQEqPMiWLouDw_LbhPIgWOzjKDd-06lh1ETI3ogxBSMJdvDQ2BQ8fuJyUSknOA0To.webp'
    ];

    return (
        <div className="modal">
            <h2>배너 선택</h2>
            <div className="banner-list">
                {bannerImages.map((banner, index) => (
                    <img
                        key={index}
                        src={banner}
                        alt={`Banner ${index + 1}`}
                        onClick={() => {
                            onSelectBanner(banner);  // 선택된 배너 URL을 전달
                            onClose();
                        }}
                    />
                ))}
            </div>
            <button onClick={onClose}>닫기</button>
        </div>
    );
};

export default BannerModal;