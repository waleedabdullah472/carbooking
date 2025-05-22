import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- Import useNavigate
import './LoginPage.css';

const LoginPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();  // <-- Initialize navigate

  const handleLogin = () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setPopupMessage('❌ Please fill in both email and password.');
      setShowPopup(true);
    } else {
      setPopupMessage('✅ Login Successful!');
      setShowPopup(true);

      // Simulate delay before navigation so user sees popup
      setTimeout(() => {
        setShowPopup(false);
        navigate('/home');  // <-- Navigate to Home page
      }, 1500);  // 1.5 seconds delay, adjust if needed
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src="/IMG.png" alt="Car" className="car-image" />
        <div className="overlay-text">Welcome Back</div>
        <div className="image-overlay" />
      </div>

      <div className="content">
        <div className="input-group">
          <label htmlFor="email" className="input-label">Email</label>
          <input ref={emailRef} type="email" id="email" placeholder="Enter your email" className="input-field" />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="input-label">Password</label>
          <input ref={passwordRef} type="password" id="password" placeholder="Enter your password" className="input-field" />
        </div>

        <button className="signup-button" onClick={handleLogin}>Login</button>

        <div className="divider">Or</div>

        <button className="google-button">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="google-icon" />
          Log In with Google
        </button>

        <p className="login-text">
          Don’t have an account? <a href="/signupPage" className="login-link">Sign Up</a>
        </p>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMessage}</p>
            <button className="close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
