import React from 'react';
import silverPointImage from '../assets/point/silverPoint.png';
import goldPointImage from '../assets/point/goldPoint.png';
import '../styles/MyPoint.css';

const MyPoint = ({ silverPoint }) => {
    return (
        <div className="my-point-container">
            <div className="point-item">
                <img src={silverPointImage} alt="Silver Point" className="point-image" />
                <span className="point-value">{silverPoint}</span>
            </div>
        </div>
    );
};

export default MyPoint;