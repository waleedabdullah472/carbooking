// ChatPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ChatPage.css'; // Import the CSS file

//This example uses functional components and hooks, common in modern React development.

const ChatPage = () => {
  const [messages, setMessages] = useState([]);  // Array of message objects {id, user, text, timestamp}
  const [newMessage, setNewMessage] = useState('');  // Text in the input box
  const [username, setUsername] = useState(''); //Logged in user's name, would typically get passed to this compoenent
  const chatWindowRef = useRef(null);

    // useEffect hook to set username at component load.
    useEffect(() => {
      // Simulate getting the user's name when the component mounts
      const storedUsername = localStorage.getItem('chatUsername')
      setUsername(storedUsername || `User ${Math.floor(Math.random() * 1000)}`); // You might fetch this from authentication
      localStorage.setItem('chatUsername', username);
    }, [username]);


    //useEffect to autoscroll when messages update.  Criticial for keeping the view on latest msgs
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const timestamp = new Date();
      const messageObject = {
        id: Date.now(), // Generate a unique ID (for React keys)
        user: username,
        text: newMessage,
        timestamp: timestamp
      };

      setMessages([...messages, messageObject]);  //Add new message to message list
      setNewMessage(''); //Clear the input after sending
    }
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline in input
      sendMessage();
    }
  };


    const formatTimestamp = (timestamp) => {
        return new Date(timestamp).toLocaleString();
    };


  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat Room</h1>
        <p>Logged in as: <strong>{username}</strong></p>
      </div>

      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.user === username ? 'sent' : 'received'}`}>
            <div className="message-header">
              <span className="message-user">{message.user}</span>
              <span className="message-timestamp">{formatTimestamp(message.timestamp)}</span>
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <textarea
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;