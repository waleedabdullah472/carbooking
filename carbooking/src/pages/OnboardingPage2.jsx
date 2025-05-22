import React from 'react';
import { Link } from 'react-router-dom';
import './OnboardingPage.css';

const OnboardingPage2 = () => {
  return (
    <div className="onboarding-page">
      <div className="top-right">
        <Link to="/onboarding3" className="skip-button">Skip</Link>
      </div>

      <img src="/Group 33798.png" alt="Onboarding Image" className="onboarding-image"/>

      <h1>Your ride, your way. <br /> Let's get started!</h1>
      <p>Enter your destination, sit back, and <br /> let us take care of the rest.</p>

      <div className="indicators">
        <span className="indicator"></span>
        <span className="indicator active"></span>
        <span className="indicator"></span>
      </div>

      <Link to="/onboarding3" className="next-button">Next</Link>

    </div>
  );
};

export default OnboardingPage2;