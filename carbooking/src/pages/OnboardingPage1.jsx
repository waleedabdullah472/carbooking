import React from 'react';
import { Link } from 'react-router-dom';
import './OnboardingPage.css';

const OnboardingPage1 = () => {
  return (
    <div className="onboarding-page">
      <div className="top-right">
        <Link to="/onboarding2" className="skip-button">Skip</Link>
      </div>

      <img src="/Group 33797.png" alt="Onboarding Image" className="onboarding-image"/> 

      <h1>The best car in your<br/> hands with Ryde</h1>
      <p>Discover the convenience of finding<br/> your perfect ride with our Ryde App.</p>

      <div className="indicators">
        <span className="indicator active"></span>
        <span className="indicator"></span>
        <span className="indicator"></span>
      </div>

      <Link to="/onboarding2" className="next-button">Next</Link>

    </div>
  );
};

export default OnboardingPage1;