import React, { useState } from 'react';
import '../styles/Home.css';
import Login from '../components/Login';
import BannerModal from '../modal/BannerModal';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="Home">
      <header className="Home-header">
        <Login />
        <button onClick={() => setModalOpen(true)}>Edit Banner</button>
      </header>
      {isModalOpen && (
        <BannerModal
          onClose={() => setModalOpen(false)}
          onSelectBanner={(bannerUrl) => console.log('Selected Banner URL:', bannerUrl)}
        />
      )}
    </div>
  );
};

export default Home;
