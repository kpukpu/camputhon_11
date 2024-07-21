import React from 'react';

const TitleModal = ({ titles, onClose, onSelect }) => {
    return (
        <div className="modal">
            <h2>칭호 선택</h2>
            <ul>
                {titles.map((title, index) => (
                    <li key={index} onClick={() => onSelect(title)}>
                        {title}
                    </li>
                ))}
            </ul>
            <button onClick={onClose}>닫기</button>
        </div>
    );
};

export default TitleModal;