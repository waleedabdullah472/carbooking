import React from 'react';
import './ProfilePage.css'; // Import CSS

const ProfilePage = () => {
  const name = "John Doe";
  const title = "Software Engineer";
  const profileImageUrl = "path/to/your/profile-image.jpg"; // Replace!

  return (
    <div className="profileContainer">
      <img src={profileImageUrl} alt="Profile" className="profileImage" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default ProfilePage;