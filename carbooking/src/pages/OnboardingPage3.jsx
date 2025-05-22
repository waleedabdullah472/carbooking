import React from 'react';
import { Link } from 'react-router-dom';
import './OnboardingPage.css';

const OnboardingPage3 = () => {
  return (
    <div className="onboarding-page">
      <div className="top-right">
        <Link to="/GetStartedPage" className="skip-button">Skip</Link>
      </div>

      <img src="/car.png" alt="Onboarding Image" className="onboarding-image"/>

      <h1>Your ride, your way.<br /> Let's get started!</h1>
      <p>Enter your destination, sit back, and <br /> let us take care of the rest.</p>

      <div className="indicators">
        <span className="indicator"></span>
        <span className="indicator"></span>
        <span className="indicator active"></span>
      </div>

      <Link to="/GetStartedPage" className="next-button">Get Started</Link>

    </div>
  );
};

export default OnboardingPage3;