import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.js";
import TestApi from "./pages/TestApi"
import MyPage from "./pages/MyPage";
import "./index.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<TestApi />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
        </>
    );
}

export default App;