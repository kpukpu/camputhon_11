import React from 'react';
import Footer from '../components/Footer';  // Footer 컴포넌트의 경로에 맞게 수정해주세요
import '../styles/Layout.css';
import Header from "../components/Header";  // 이 CSS 파일을 새로 만들 예정입니다

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;