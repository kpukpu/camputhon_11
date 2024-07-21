import React from 'react';
import '../styles/Progress.css';

const Progress = ({ value }) => {
    return (
        <div className="progress-bar">
            <div
                className="progress-bar-fill"
                style={{ width: `${value}%` }}
            ></div>
        </div>
    );
};

export default Progress;