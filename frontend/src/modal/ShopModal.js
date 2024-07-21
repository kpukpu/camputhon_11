import React from 'react';
import '../styles/ShopModal.css';

const ShopModal = ({ product, onClose, onPurchase }) => {
    if (!product) return null;

    return (
        <div className="modalB">
            <div className="modalB-content">
                <p>{product.name}를(을) 구매하시겠습니까?</p>
                <div className="modalB-buttons">
                    <button onClick={onPurchase}>구매</button>
                    <button onClick={onClose}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default ShopModal;