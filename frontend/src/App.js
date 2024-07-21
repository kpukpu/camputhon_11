import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.js";
import TestApi from "./pages/TestApi"

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<TestApi />} />
            </Routes>
        </>
    );
}

export default App;