import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingPage1 from './pages/OnboardingPage1';
import OnboardingPage2 from './pages/OnboardingPage2';
import OnboardingPage3 from './pages/OnboardingPage3';
import GetStartedPage from './pages/GetStartedPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage1 />} />
        <Route path="/onboarding2" element={<OnboardingPage2 />} />
        <Route path="/onboarding3" element={<OnboardingPage3 />} />
        <Route path="/GetStartedPage" element={<GetStartedPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />  
      </Routes>
    </Router>
  );
}

export default App;
