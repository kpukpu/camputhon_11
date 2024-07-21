import React from 'react';

const Login = () => {
    const handleLoginClick = () => {
        window.location.href = 'https://example.com'; // 원하는 링크로 변경
    };

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={handleLoginClick}>
                Login하기
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', // 7/10 비율로 상단에 위치
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Login;
