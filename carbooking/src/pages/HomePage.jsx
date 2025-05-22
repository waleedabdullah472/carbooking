import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [userName, setUserName] = useState('Guest');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    const fetchUserData = async () => {
      // Replace this with your actual user data retrieval logic
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      } else {
        // You might want to redirect to a login page if no user is logged in
        setUserName('Guest'); // Or, set a default user
      }
    };

    fetchUserData();

    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome, {userName}!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        You have successfully logged in.
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <p>Current Time: {formattedTime}</p>
        <p>Current Date: {formattedDate}</p>
      </div>

      <button style={{
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '1rem'
      }}
      onClick={() => {
        localStorage.removeItem('userName'); // Clear user data on logout
        setUserName('Guest'); // Reset the username
        // Optionally, redirect to the login page here
        alert("Logged out!"); // Or use a router to navigate
      }}>
        Logout
      </button>


      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{fontSize: '0.8rem', color: '#777'}}>This page automatically updates the time every second.</p>
          <p style={{fontSize: '0.8rem', color: '#777'}}>User data is simulated via local storage (for demonstration purposes).</p>
      </div>
    </div>
  );
};

export default HomePage;