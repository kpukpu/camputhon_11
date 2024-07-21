import React from "react";
import '../styles/Home.css';
import Login from '../components/Login';

const Home = () => {
    return (
        <div className="Home">
            <header className="Home-header">
                <Login />
            </header>
        </div>
    )
}

export default Home