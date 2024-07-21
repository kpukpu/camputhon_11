import React from 'react';

const ProfilePictureModal = ({ onClose, onUpload }) => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('파일 업로드됨:', file.name);
            onUpload(file);
            onClose();
        }
    };

    return (
        <div className="modal">
            <h2>프로필 사진 업로드</h2>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            <button onClick={onClose}>닫기</button>
        </div>
    );
};

export default ProfilePictureModal;