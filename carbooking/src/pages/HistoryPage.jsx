import React from 'react';
import './HistoryPage.css'; // Import the CSS file

const HistoryPage = () => {
  // Dummy history data. Replace with actual data fetching logic.
  const historyData = [
    { id: 1, timestamp: '2023-10-27 10:00:00', description: 'User logged in' },
    { id: 2, timestamp: '2023-10-27 10:05:00', description: 'Edited profile information' },
    { id: 3, timestamp: '2023-10-27 10:15:00', description: 'Uploaded a new image' },
    { id: 4, timestamp: '2023-10-27 10:20:00', description: 'Created a new post' },
    { id: 5, timestamp: '2023-10-27 10:30:00', description: 'Deleted an old post' },

  ];

  return (
    <div className="history-page">
      <h2>History</h2>
      <ul className="history-list">
        {historyData.map((item) => (
          <li key={item.id} className="history-item">
            <span className="history-timestamp">{item.timestamp}</span>
            <span className="history-description">{item.description}</span>
          </li>
        ))}
      </ul>
       {historyData.length === 0 && <p>No history available.</p>}
    </div>
  );
};

export default HistoryPage;