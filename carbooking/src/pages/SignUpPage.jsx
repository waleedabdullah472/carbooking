import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSignup = () => {
    if (!name || !email || !password) {
      setPopupMessage('❌ Please fill all fields.');
    } else {
      // Save user to localStorage
      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      setPopupMessage('✅ Signup successful! You can now login.');
    }
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="container">
      <div className="image-section">
        <img src="/IMG.png" alt="Car" className="car-image" />
        <div className="overlay-text">Create Your Account</div>
        <div className="image-overlay" />
      </div>

      <div className="content">
        <input type="text" placeholder="Name" className="input-field" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input-field" value={password} onChange={e => setPassword(e.target.value)} />

        <button className="signup-button" onClick={handleSignup}>Sign Up</button>

        <div className="divider">Or</div>
        <button className="google-button">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="google-icon" />
          Sign Up with Google
        </button>
        <p className="login-text">
          Already have an account? <a href="/loginPage" className="login-link">Log in</a>
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

export default SignupPage;
