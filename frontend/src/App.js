import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.js";
import TestApi from "./pages/TestApi"
import MyPage from "./pages/MyPage";
import Footer from "./components/Footer";
import "./index.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<TestApi />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;