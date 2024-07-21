import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import TestApi from "./pages/TestApi"
import MyPage from "./pages/MyPage";
import Layout from "./layout/Layout";
import Task from "./pages/TaskEditing";
import Shop from "./pages/Shop";
import "./index.css";

function App() {
    return (
        <>
            <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/calendar" element={<TestApi />} />
                <Route path="/my-page" element={<MyPage />} />
                <Route path="/task" element={<Task />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
            </Layout>
        </>
    );
}

export default App;