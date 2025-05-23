import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import OnboardingPage1 from './pages/OnboardingPage1';
import OnboardingPage2 from './pages/OnboardingPage2';
import OnboardingPage3 from './pages/OnboardingPage3';
import GetStartedPage from './pages/GetStartedPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

import Footer from './Footer';

const AppContent = () => {
  const location = useLocation();
  const showFooter = ['/home', '/history', '/chat', '/profile'].includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage1 />} />
        <Route path="/onboarding2" element={<OnboardingPage2 />} />
        <Route path="/onboarding3" element={<OnboardingPage3 />} />
        <Route path="/GetStartedPage" element={<GetStartedPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
