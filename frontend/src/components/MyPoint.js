import React from 'react';
import silverPointImage from '../assets/profile.png';
import goldPointImage from '../assets/profile.png';
import '../styles/MyPoint.css';

const MyPoint = ({ silverPoint, goldPoint }) => {
    console.log('MyPoint rendered:', { silverPoint, goldPoint }); // 디버깅용 로그
    return (
        <div className="my-point-container">
            <div className="point-item">
                <img src={silverPointImage} alt="Silver Point" className="point-image" />
                <span className="point-value">{silverPoint}</span>
            </div>
            <div className="point-item">
                <img src={goldPointImage} alt="Gold Point" className="point-image" />
                <span className="point-value">{goldPoint}</span>
            </div>
        </div>
    );
};

export default MyPoint;