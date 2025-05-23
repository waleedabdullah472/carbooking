import React, { useState } from 'react';
import { FaHome, FaEnvelope, FaUser, FaHistory } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState('home'); // Default active icon
  const navigate = useNavigate();

  const handleIconClick = (iconName, route) => {
    setActiveIcon(iconName);
    navigate(route); // Navigate to the route
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <div
          className={`footer-icon ${activeIcon === 'home' ? 'active' : ''}`}
          onClick={() => handleIconClick('home', '/home')}
        >
          <FaHome color="white" size={24} />
        </div>

        <div
          className={`footer-icon ${activeIcon === 'history' ? 'active' : ''}`}
          onClick={() => handleIconClick('history', '/history')}
        >
          <FaHistory color="white" size={24} />
        </div>

        <div
          className={`footer-icon ${activeIcon === 'chat' ? 'active' : ''}`}
          onClick={() => handleIconClick('chat', '/chat')}
        >
          <FaEnvelope color="white" size={24} />
        </div>

        <div
          className={`footer-icon ${activeIcon === 'profile' ? 'active' : ''}`}
          onClick={() => handleIconClick('profile', '/profile')}
        >
          <FaUser color="white" size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
