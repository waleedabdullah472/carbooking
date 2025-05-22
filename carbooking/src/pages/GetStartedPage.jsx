import React from 'react';
import './GetStartedPage.css';

const GetStartedPage = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img
          src="\public\IMG.png"
          alt="Car"
          className="car-image"
        />
        <div className="image-overlay" />
      </div>

      <div className="content">
        <h2 className="title">Let’s get started</h2>
        <p className="subtitle">Sign up or log in to find out the best<br></br> car for you</p>

        <a href="/signupPage" target="_blank" rel="noopener noreferrer">
  <button className="signup-button">Sign Up</button>
</a>


        <div className="divider">Or</div>

        <button className="google-button">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="google-icon"
          />
          Log In with Google
        </button>

        <p className="login-text">
          Don’t have an account? <a href="/LoginPage" className="login-link">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedPage;
